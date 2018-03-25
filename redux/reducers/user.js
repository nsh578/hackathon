import _ from 'lodash';
import { Map } from 'immutable';

import { userTypes as actionTypes } from '../../constants/actionTypes';

export const initialState = Map({
  isArtist: null,
  username: null,
  email: null,
  password: null,
  firstName: null,
  lastName: null,
  phoneNumber: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_USER: {
      if (state.username) return state;
      return state.merge({ ...action.payload });
    }
    case actionTypes.UPDATE_USER: {
      const updatedFields = _.pick(action.payload, [...state.keys()]);
      return state.merge(updatedFields);
    }
    default:
      return state;
  }
}
