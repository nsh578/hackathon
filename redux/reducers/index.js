import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import feed from './feed';
import post from './post';
import error from './error';

const rootReducer = combineReducers({
  user,
  auth,
  feed,
  post,
  error,
});

export default rootReducer;
