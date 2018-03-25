import { combineReducers } from 'redux';
import user, { initialState as userState } from './user';
import auth, { initialState as authState } from './auth';
import feed, { initialState as feedState } from './feed';
import post, { initialState as postState } from './post';
import error, { initialState as errorState } from './error';

const rootReducer = combineReducers({
  user,
  auth,
  feed,
  post,
  error,
});

export const initialState = {
  user: userState,
  auth: authState,
  feed: feedState,
  post: postState,
  error: errorState,
}

export default rootReducer;
