import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// UI
import { Card } from './ui/Card';

export default class Feed extends React.Component {
  state = {
    data: ['', '', '', ''],
  };

  render() {
    const { data } = this.state;
    const { type } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          ListHeaderComponent={<Text style={styles.title}>{type} Feed</Text>}
          renderItem={({ item, index }) => <Card key={index} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
});
