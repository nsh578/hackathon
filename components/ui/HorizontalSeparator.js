import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HorizontalSeparator = props => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#ffffff50',
    marginLeft: 20,
    marginTop: '5%',
    marginBottom: '5%',
  },
});
