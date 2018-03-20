import { createSelector } from 'reselect';

const authDataSelector = state => state.auth;

const authorizedSelector = createSelector(
  authDataSelector,
  payload => payload.get('authorized')
);

const errorMsgSelector = createSelector(
  authDataSelector,
  payload => payload.get('errorMsg')
);

export const loginStatusSelector = createSelector(
  authDataSelector,
  payload => payload.get('loginStatus')
);

export const signupStatusSelector = createSelector(
  authDataSelector,
  payload => payload.get('signupStatus')
);

export const authSelector = state => ({
  authorized: authorizedSelector(state),
  errorMsg: errorMsgSelector(state),
  loginStatus: loginStatusSelector(state),
  signupStatus: signupStatusSelector(state),
});
