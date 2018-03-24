import { createSelector } from 'reselect';

import { ARTIST, FAN, FETCH_STATUS, ERROR_MSG, STREAM }
  from '../../constants/feedStateKeys';

const feedDataSelector = state => state.feed

const createFeedSelector = fieldPath => createSelector(
  feedDataSelector,
  payload => payload.getIn(fieldPath),
);
const createArtistFeedSelector = field => createFeedSelector([ARTIST, field]);
const createFanFeedSelector =
(artist, field) => createFeedSelector([FAN, field, artist]);

export const artistFeedSelector = state => ({
  [FETCH_STATUS]: createArtistFeedSelector(FETCH_STATUS)(state),
  [ERROR_MSG]: createArtistFeedSelector(ERROR_MSG)(state),
  [STREAM]: createArtistFeedSelector(STREAM)(state),
});

export const fanFeedSelector = (state, artist) => ({
  [FETCH_STATUS]: createFanFeedSelector(artist, FETCH_STATUS)(state),
  [ERROR_MSG]: createFanFeedSelector(artist, ERROR_MSG)(state),
  [STREAM]: createFanFeedSelector(artist, STREAM)(state),
});

export const getFeedSelector = (feedType) => {
  const [_feedType, artist] = feedType.split('.');
  switch (_feedType) {
    case ARTIST: return artistFeedSelector;
    case FAN: return state => fanFeedSelector(state, artist);
    default: return null;
  }
}
