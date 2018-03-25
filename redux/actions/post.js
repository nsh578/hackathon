import axios from 'axios';

import thunkless from '../middleware/thunkless';
import type { userType, postType } from '../../constants/babelTypes';
import actionTypes from '../../constants/actionTypes';
import { fetchPostRequest, createPostRequest } from '../../api/requests';
import {
  fetchActivitiesStatusSelectorCreator,
  fetchPostStatusSelectorCreator,
  uploadPostStatusSelectorCreator,
} from '../selectors/post';
import { ARTIST } from '../../constants/feedStateKeys';

/**
 * Initialize posts.
 * @param {StreamFeed} stream - feed stream to use.
 * @param {Object} options - https://getstream.io/docs/js/#retrieve.
 * @returns {action}
 */
const initPosts = (stream, options) => ({
  flags: new Set([
    thunkless.WITH_STATUS,
    thunkless.MULTI_ACTION,
  ]),
  promise: new Promise(resolve =>
    stream.get(options).then(({ results }) => {
      const posts = [];
      results.forEach(activity => posts.push({
        _id: activity.foreign_id,
        _cached: false,
        artistPost: stream === ARTIST,
        authorUsername: activity.author,
        timestamp: new Date(`${activity.time}z`),
      }));
      resolve([posts, null]);
    }))
    .catch(error => Promise.reject([error, null])),
  type: [
    actionTypes.post.START_FETCHING_ACTIVITIES,
    [actionTypes.post.ADD_POST, actionTypes.post.FETCH_ACTIVITIES_SUCCESS],
    [actionTypes.error.ENQUEUE_ERROR, actionTypes.post.FETCH_ACTIVITIES_FAILED],
  ],
  iterateActions: new Set([actionTypes.post.ADD_POST]),
  statusSelector: fetchActivitiesStatusSelectorCreator(stream),
  stream,
});

/**
 * Fetch an uncached post or update existing one.
 * @param {userType} user - current user (for request).
 * @param {StreamFeed} stream - stream the post belongs to.
 * @param {string} postId - post ID.
 * @returns {action}
 */
const fetchPost = (user: userType, stream, postId) => ({
  flags: new Set([
    thunkless.WITH_STATUS,
    thunkless.MULTI_ACTION,
  ]),
  promise: axios.request(fetchPostRequest(user, postId))
    .catch(error => Promise.reject([error, null])),
  type: [
    actionTypes.post.START_FETCHING_POST,
    actionTypes.post.FETCH_POST_SUCCESS,
    [actionTypes.error.ENQUEUE_ERROR, actionTypes.post.FETCH_POST_FAILED],
  ],
  statusSelector: fetchPostStatusSelectorCreator(stream),
  stream,
});

/**
 * Create a post.
 * @param {userType} user - current user (for request).
 * @param {StreamFeed} stream - stream the post belongs to.
 * @param {postType} post - post to be created.
 * @returns {action}
 */
const createPost = (user: userType, stream, post: postType) => ({
  flags: new Set([
    thunkless.BLOCKING,
    thunkless.WITH_STATUS,
    thunkless.MULTI_ACTION,
  ]),
  promise: axios.request(createPostRequest(user, stream, post))
    .then(response => Promise.resolve([null, response.data]))
    .catch(error => Promise.reject([error, null])),
  type: [
    actionTypes.post.START_UPLOADING_POST,
    [actionTypes.post.UPLOAD_POST_SUCCESS, actionTypes.post.ADD_POST],
    [actionTypes.error.ENQUEUE_ERROR, actionTypes.post.UPLOAD_POST_FAILED],
  ],
  statusSelector: uploadPostStatusSelectorCreator(stream),
  stream,
});

export default { initPosts, fetchPost, createPost };
