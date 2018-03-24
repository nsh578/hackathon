import axios from 'axios';

import thunkless from '../middleware/thunkless';
import { feed as feedTypes } from '../../constants/actionTypes';
import type { fetchFeedArgType } from '../../constants/babelTypes';
import { streamTokenRequest } from '../../api/requests';
import { getFeedSelector } from '../selectors/feed';

const fetchFeed = ({ artistUsername, user }: fetchFeedArgType) => {
  const feedType = artistUsername ? `fan.${artistUsername}` : 'artist';
  return {
    flags: new Set([
      thunkless.BLOCKING,
      thunkless.WITH_STATUS,
    ]),
    promise: new Promise(() => (
      // Obtain token and initialize feed.
      axios(streamTokenRequest({ artistUsername, user }))
        .then(({ data: { stream } }) => Promise.resolve(stream))
    )),
    type: [
      feedTypes.START_FETCHING_FEED,
      feedTypes.FEED_FETCH_SUCCESS,
      feedTypes.FEED_FETCH_FAIL,
    ],
    statusSelector: getFeedSelector(feedType),
    feedType,
  }
};

export default { fetchFeed };
