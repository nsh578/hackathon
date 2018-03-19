import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HorizSeperator = props => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: '#ffffff50',
    marginLeft: 20,
  },
});
