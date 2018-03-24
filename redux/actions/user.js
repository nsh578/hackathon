import { createAction } from 'redux-actions';

import { userType } from '../../constants/babelTypes';
import { user as userTypes } from '../../constants/actionTypes';

const initUser = createAction(userTypes.INIT_USER, (user: userType) => user);
const updateUser = createAction(userTypes.UPDATE_USER);

export default { initUser, updateUser };
