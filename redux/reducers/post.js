import { Map } from 'immutable';

import thunkless from '../middleware/thunkless';
import { postTypes as actionTypes } from '../../constants/actionTypes';

export const initialState = Map();

export default (state = initialState, { payload, stream, ...action }) => {
  switch (action.type) {
    case actionTypes.START_FETCHING_ACTIVITIES:
      return state.mergeDeep({
        [stream.feedUrl]: {
          fetchActivitiesStatus: thunkless.actionStatus.BUSY,
        },
      });
    case actionTypes.FETCH_ACTIVITIES_SUCCESS:
      return state.mergeDeep({
        [stream.feedUrl]: {
          fetchActivitiesStatus: thunkless.actionStatus.SUCCESS,
        },
      });
    case actionTypes.FETCH_ACTIVITIES_FAILED:
      return state.mergeDeep({
        [stream.feedUrl]: {
          fetchActivitiesStatus: thunkless.actionStatus.FAILURE,
        },
      });
    case actionTypes.ADD_POST:
      return state.mergeDeep({
        [stream.feedUrl]: {
          posts: {
            [`${payload.timestamp.toISOString()}.${payload._id}`]: payload,
          },
        },
      });
    case actionTypes.START_UPLOADING_POST:
      return state.mergeDeep({
        [stream.feedUrl]: {
          uploadPostStatus: thunkless.actionStatus.BUSY,
        },
      });
    case actionTypes.UPLOAD_POST_SUCCESS:
      return state.mergeDeep({
        [stream.feedUrl]: {
          uploadPostStatus: thunkless.actionStatus.SUCCESS,
        },
      });
    case actionTypes.UPLOAD_POST_FAILED:
      return state.mergeDeep({
        [stream.feedUrl]: {
          uploadPostStatus: thunkless.actionStatus.FAILURE,
        },
      });
    case actionTypes.START_FETCHING_POST:
      return state.mergeDeep({
        [stream.feedUrl]: {
          fetchPostStatus: thunkless.actionStatus.BUSY,
        },
      });
    case actionTypes.FETCH_POST_SUCCESS:
      return state.mergeDeep({
        [stream.feedUrl]: {
          fetchPostStatus: thunkless.actionStatus.SUCCESS,
          posts: {
            [`${payload.data.timestamp.toISOString()}.${payload.data._id}`]:
              payload.data,
          },
        },
      });
    case actionTypes.FETCH_POST_FAILED:
      return state.mergeDeep({
        [stream.feedUrl]: {
          fetchPostStatus: thunkless.actionStatus.FAILURE,
        },
      });
    default:
      return state;
  }
}
