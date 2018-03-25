import { Component } from 'react';
import { connect } from 'react-redux';

import selectors from '../redux/selectors';
import { postSelectorCreator } from '../redux/selectors/post';
import { errorSelector } from '../redux/selectors/error';

import authActions from '../redux/actions/auth';
import errorActions from '../redux/actions/error';
import feedActions from '../redux/actions/feed';
import postActions from '../redux/actions/post';
import userActions from '../redux/actions/user';

const mapStateToProps = state => ({
  user: selectors.userSelector(state),
  auth: selectors.authSelector(state),
  feed: {
    artist: selectors.artistFeedSelector(state),
    fan: artist => selectors.fanFeedSelector(state, artist),
  },
  post: stream => postSelectorCreator(stream)(state),
  error: errorSelector(state),
});

const mapDispatchToProps = {
  ...authActions,
  ...errorActions,
  ...feedActions,
  ...postActions,
  ...userActions,
};

@connect(mapStateToProps, mapDispatchToProps)
class ReduxTest extends Component {
  render() {
    return null;
  }
}

export default ReduxTest;
