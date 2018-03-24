import axios from 'axios';

import thunkless from '../middleware/thunkless';
import type { userType, postType } from '../../constants/babelTypes';
import { post as postTypes, error as errorTypes } from '../../constants/actionTypes';
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
    stream.get(options, activities =>
      activities.forEach((activity) => {
        const post = {
          _id: activity.foreign_id,
          _cached: false,
          artistPost: stream === ARTIST,
          authorUsername: activity.author,
          timestamp: activity.time,
        };
        resolve([post, null]);
      }))).catch(error => [error, null]),
  type: [
    postTypes.START_FETCHING_ACTIVITIES,
    [postTypes.ADD_POST, postTypes.FETCH_ACTIVITIES_SUCCESS],
    [errorTypes.ENQUEUE_ERROR, postTypes.FETCH_ACTIVITIES_FAILED],
  ],
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
    .catch(error => [error, null]),
  type: [
    postTypes.START_FETCHING_POST,
    postTypes.FETCH_POST_SUCCESS,
    [errorTypes.ENQUEUE_ERROR, postTypes.FETCH_POST_FAILED],
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
    .then(response => [null, response.data])
    .catch(error => [error, null]),
  type: [
    postTypes.START_UPLOADING_POST,
    [postTypes.UPLOAD_POST_SUCCESS, postTypes.ADD_POST],
    [errorTypes.ENQUEUE_ERROR, postTypes.UPLOAD_POST_FAILED],
  ],
  statusSelector: uploadPostStatusSelectorCreator(stream),
  stream,
});

export default { initPosts, fetchPost, createPost };
