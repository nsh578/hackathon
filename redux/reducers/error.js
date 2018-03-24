import { List } from 'immutable';

import { error as actionTypes } from '../../constants/actionTypes';

const initialState = List();

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ENQUEUE_ERROR:
      return state.push(action.payload);
    case actionTypes.DEQUEUE_ERROR:
      return state.shift();
    default:
      return state;
  }
}
