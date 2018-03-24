import { createSelector } from 'reselect';

const userDataSelector = state => state.user;
const authDataSelector = state => state.auth;

const authorizedSelector = createSelector(
  authDataSelector,
  payload => payload.get('authorized')
);

const userFieldSelector = fieldName => createSelector(
  userDataSelector,
  payload => payload.get(fieldName)
);

export const userSelector = state => ({
  authorized: authorizedSelector(state),
  username: userFieldSelector('username')(state),
  token: userFieldSelector('token')(state),
  isArtist: userFieldSelector('isArtist')(state),
  email: userFieldSelector('email')(state),
  password: userFieldSelector('password')(state),
  firstName: userFieldSelector('firstName')(state),
  lastName: userFieldSelector('lastName')(state),
  phoneNumber: userFieldSelector('phoneNumber')(state),
});
