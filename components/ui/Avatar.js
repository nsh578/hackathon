import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import defaultImage from '../../assets/images/default-avatar.png';

export const Avatar = ({ source }) => {
  const imgSource = source || defaultImage;

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={imgSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    top: 25,
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
});
