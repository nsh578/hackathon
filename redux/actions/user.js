import { createAction } from 'redux-actions';

import { userType } from '../../constants/babelTypes';
import actionTypes from '../../constants/actionTypes';

const initUser = createAction(
  actionTypes.user.INIT_USER,
  (user: userType) => user
);
const updateUser = createAction(actionTypes.user.UPDATE_USER);

export default { initUser, updateUser };
