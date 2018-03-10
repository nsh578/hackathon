import actionTypes from '../../constants/actionTypes';

export default (state=null, action) => {
  switch (action.type) {
    case actionTypes.PLACEHOLDER: 
      return null;
    default:
      return state;
  }
}
