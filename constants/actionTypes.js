export default {
  // Auth actions:
  auth: {
    START_AUTH: 'app/auth/START_AUTH',
    AUTH_COMPLETE: 'app/auth/AUTH_COMPLETE',
    AUTH_FAILED: 'app/auth/AUTH_FAILED',
    START_SIGNUP: 'app/auth/START_SIGNUP',
    SIGNUP_COMPLETE: 'app/auth/SIGNUP_COMPLETE',
    SIGNUP_FAILED: 'app/auth/SIGNUP_FAILED',
  },
  // User actions:
  user: {
    INIT_USER: 'app/user/INIT_USER',
    UPDATE_USER: 'app/user/UPDATE_USER',
  },
  // Feed actions:
  feed: {
    START_FETCHING_FEED: 'app/feed/START_FETCHING_FEED',
    FEED_FETCH_SUCCESS: 'app/feed/FEED_FETCH_SUCCESS',
    FEED_FETCH_FAIL: 'app/feed/FEED_FETCH_FAIL',
  },
}
