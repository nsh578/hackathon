import actionTypes from '../../constants/actionTypes';

const initialState = Map({
    authInProgress: false,
    signupInProgress: false,
    authorized: false,
    errorMsg: null,
  });

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_AUTH:
    case actionTypes.AUTH_COMPLETE:
    case actionTypes.AUTH_FAILED:
    case actionTypes.START_SIGNUP:
    case actionTypes.SIGNUP_COMPLETE:
    case actionTypes.SIGNUP_FAILED:
      return state.merge({ ...action.payload });
    default:
      return state;
  }
}
