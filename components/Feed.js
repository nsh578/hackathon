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
        <Text style={styles.title}>{type} Feed</Text>
        <FlatList
          data={data}
          renderItem={({ item, index }) => <Card key={index} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
});
