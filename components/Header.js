import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Avatar } from './ui/Avatar';

import tempPlaceHolderImage from '../assets/images/Eric-Nam.jpg';

export const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>{title}</Text>
      <Avatar source={''} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  pageTitle: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '600',
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 10,
  }
});
