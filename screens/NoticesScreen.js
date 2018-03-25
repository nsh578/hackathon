import React from 'react';
import ReduxTest from '../components/ReduxTest';

export default class NoticesScreen extends React.Component {
  static navigationOptions = {
    title: 'Notices',
  };

  render() {
    return <ReduxTest />;
  }
}
