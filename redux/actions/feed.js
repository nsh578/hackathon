import axios from 'axios';

import client from '../../api/stream';
import thunkless from '../middleware/thunkless';
import { feedTypes } from '../../constants/actionTypes';
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
    // Obtain token and initialize feed.
    promise: axios(streamTokenRequest({ artistUsername, user }))
      .then(({ data: { streamToken } }) => {
        const stream = client.feed(
          feedType[3] === '.' ? 'fan' : feedType,
          artistUsername || user.username,
          streamToken
        );
        return Promise.resolve(stream)
      }),
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
