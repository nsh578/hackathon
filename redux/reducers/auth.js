import { Map } from 'immutable';

import thunkless from '../middleware/thunkless';
import { authTypes as actionTypes } from '../../constants/actionTypes';

export const initialState = Map({
  loginStatus: null,
  signupStatus: null,
  authorized: false,
  errorMsg: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_AUTH:
      return state.set('loginStatus', thunkless.actionStatus.BUSY);
    case actionTypes.AUTH_COMPLETE:
      return state
        .set('loginStatus', thunkless.actionStatus.SUCCESS)
        .set('authorized', true);
    case actionTypes.AUTH_FAILED:
      return state
        .set('loginStatus', thunkless.actionStatus.FAILURE)
        .set('errorMsg', action.payload.message);
    case actionTypes.START_SIGNUP:
      return state.set('signupStatus', thunkless.actionStatus.BUSY);
    case actionTypes.SIGNUP_COMPLETE:
      return state
        .set('signupStatus', thunkless.actionStatus.SUCCESS)
        .set('authorized', true);
    case actionTypes.SIGNUP_FAILED:
      return state
        .set('signupStatus', thunkless.actionStatus.FAILURE)
        .set('errorMsg', action.payload.message);
    default:
      return state;
  }
}
