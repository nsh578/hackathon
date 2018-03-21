import { fromJS } from 'immutable';

import thunkless from '../middleware/thunkless';
import { auth as actionTypes } from '../../constants/actionTypes';
import { ARTIST, FAN, FETCH_STATUS, ERROR_MSG, STREAM }
  from '../../constants/feedStateKeys';

export const initialState = () =>
  fromJS({
    [ARTIST]: {
      [FETCH_STATUS]: null,
      [ERROR_MSG]: null,
      [STREAM]: null,
    },
    [FAN]: {
      [FETCH_STATUS]: {},
      [ERROR_MSG]: {},
      [STREAM]: {},
    },
  })

export default (state = initialState, action) => {
  if (!action.feedType) return state;
  const [_feedType, artistUsername] = action.feedType.split('.');
  switch (action.type) {
    case actionTypes.START_FETCHING_FEED:
      switch (_feedType) {
        case ARTIST:
          return state.setIn(
            [ARTIST, FETCH_STATUS],
            thunkless.actionStatus.BUSY
          );
        case FAN:
          return state.mergeIn(
            [FAN, FETCH_STATUS],
            { [artistUsername]: thunkless.actionStatus.BUSY }
          );
        default:
          return state;
      }

    case actionTypes.FEED_FETCH_COMPLETE:
      switch (_feedType) {
        case ARTIST:
          return state.setIn(
            [ARTIST, FETCH_STATUS],
            thunkless.actionStatus.SUCCESS
          ).setIn(
            [ARTIST, STREAM],
            action.payload
          );
        case FAN:
          return state.mergeIn(
            [FAN, FETCH_STATUS],
            { [artistUsername]: thunkless.actionStatus.SUCCESS }
          ).mergeIn(
            [FAN, STREAM],
            { [artistUsername]: action.payload }
          );
        default:
          return state;
      }

    case actionTypes.FEED_FETCH_FAILED:
      switch (_feedType) {
        case ARTIST:
          return state.setIn(
            [ARTIST, FETCH_STATUS],
            thunkless.actionStatus.FAILURE
          ).setIn(
            [ARTIST, STREAM],
            action.error.message
          );
        case FAN:
          return state.mergeIn(
            [FAN, FETCH_STATUS],
            { [artistUsername]: thunkless.actionStatus.FAILURE }
          ).mergeIn(
            [FAN, STREAM],
            { [artistUsername]: action.error.message }
          );
        default:
          return state;
      }

    default:
      return state;
  }
}
