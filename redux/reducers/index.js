import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import error from './error';

const rootReducer = combineReducers({
  user,
  auth,
  error,
});

export default rootReducer;
