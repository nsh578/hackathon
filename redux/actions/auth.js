import _ from 'lodash';
import axios from 'axios';

import thunkless from '../middleware/thunkless';
import { toUserType } from '../../constants/babelTypes';
import { auth as authTypes, user as userTypes } from '../../constants/actionTypes';
import { loginRequest, signupRequest } from '../../api/requests';
import { loginStatusSelector, signupStatusSelector } from '../selectors/auth';

const login = ({ username, email, password }) => ({
  flags: new Set([
    thunkless.BLOCKING,
    thunkless.WITH_STATUS,
    thunkless.MULTI_ACTION,
  ]),
  promise: new Promise(() => {
    const credentials = _.omitBy({ username, email, password }, _.isNil);
    return axios(loginRequest(credentials)).then((response) => {
      const user = toUserType(response.data);
      return Promise.resolve([user, null]);
    });
  }),
  type: [
    authTypes.START_AUTH,
    [userTypes.INIT_USER, authTypes.AUTH_COMPLETE],
    authTypes.AUTH_FAILED,
  ],
  statusSelector: loginStatusSelector,
});

const signup = userData => ({
  flags: new Set([
    thunkless.BLOCKING,
    thunkless.WITH_STATUS,
    thunkless.MULTI_ACTION,
  ]),
  promise: new Promise(() => {
    return axios(signupRequest(userData)).then((response) => {
      const user = toUserType(response.data);
      return Promise.resolve([user, null]);
    });
  }),
  type: [
    authTypes.START_SIGNUP,
    [userTypes.INIT_USER, authTypes.SIGNUP_COMPLETE],
    authTypes.SIGNUP_FAILED,
  ],
  statusSelector: signupStatusSelector,
});

export default { login, signup };
