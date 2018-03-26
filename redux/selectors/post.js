import { createSelector } from 'reselect';

const streamSelectorCreator = stream => state => state.post.get(stream.feedUrl);

const postsSelectorCreator = stream => createSelector(
  streamSelectorCreator(stream),
  payload => payload.get('posts'),
);

export const fetchActivitiesStatusSelectorCreator = stream => createSelector(
  streamSelectorCreator(stream),
  payload => payload.get('fetchActivitiesStatus'),
);

export const uploadPostStatusSelectorCreator = stream => createSelector(
  streamSelectorCreator(stream),
  payload => payload.get('uploadPostStatus'),
);

export const fetchPostStatusSelectorCreator = stream => createSelector(
  streamSelectorCreator(stream),
  payload => payload.get('fetchPostStatus'),
);

export const postSelectorCreator = stream => state => ({
  fetchActivitiesStatus: fetchActivitiesStatusSelectorCreator(stream)(state),
  fetchPostStatus: fetchPostStatusSelectorCreator(stream)(state),
  uploadPostStatus: uploadPostStatusSelectorCreator(stream)(state),
  posts: postsSelectorCreator(stream)(state),
});
