// Auth actions:
export const authTypes = {
  START_AUTH: 'app/auth/START_AUTH',
  AUTH_COMPLETE: 'app/auth/AUTH_COMPLETE',
  AUTH_FAILED: 'app/auth/AUTH_FAILED',
  START_SIGNUP: 'app/auth/START_SIGNUP',
  SIGNUP_COMPLETE: 'app/auth/SIGNUP_COMPLETE',
  SIGNUP_FAILED: 'app/auth/SIGNUP_FAILED',
}
// User actions:
export const userTypes = {
  INIT_USER: 'app/user/INIT_USER',
  UPDATE_USER: 'app/user/UPDATE_USER',
}
// Feed actions:
export const feedTypes = {
  START_FETCHING_FEED: 'app/feed/START_FETCHING_FEED',
  FEED_FETCH_SUCCESS: 'app/feed/FEED_FETCH_SUCCESS',
  FEED_FETCH_FAIL: 'app/feed/FEED_FETCH_FAIL',
}
// Post actions:
export const postTypes = {
  START_FETCHING_ACTIVITIES: 'app/post/START_FETCHING_ACTIVITIES',
  FETCH_ACTIVITIES_SUCCESS: 'app/post/FETCH_ACTIVITIES_SUCCESS',
  FETCH_ACTIVITIES_FAILED: 'app/post/FETCH_ACTIVITIES_FAILED',
  ADD_POST: 'app/post/ADD_POST',
  START_UPLOADING_POST: 'app/post/START_UPLOADING_POST',
  UPLOAD_POST_SUCCESS: 'app/post/UPLOAD_POST_SUCCESS',
  UPLOAD_POST_FAILED: 'app/post/UPLOAD_POST_FAILED',
  START_FETCHING_POST: 'app/post/START_FETCHING_POST',
  FETCH_POST_SUCCESS: 'app/post/FETCH_POST_SUCCESS',
  FETCH_POST_FAILED: 'app/post/FETCH_POST_FAILED',
}
// Error actions:
export const errorTypes = {
  ENQUEUE_ERROR: 'app/error/ENQUEUE_ERROR',
  DEQUEUE_ERROR: 'app/error/DEQUEUE_ERROR',
}


export default {
  auth: authTypes,
  user: userTypes,
  feed: feedTypes,
  post: postTypes,
  error: errorTypes,
}
