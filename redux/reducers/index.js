import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import feed from './feed';
import error from './error';

const rootReducer = combineReducers({
  user,
  auth,
  feed,
  error,
});

export default rootReducer;
