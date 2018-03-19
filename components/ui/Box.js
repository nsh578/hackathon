import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import tempPlaceHolderImage from '../../assets/images/Eric-Nam.jpg';

export const Box = ({artistName, artistImage}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image}
        source={tempPlaceHolderImage} />
      <View style={styles.boxName}>
        <Text style={{color:'#fff'}}>{artistName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 115,
    width: 115,
    borderRadius: 4,
  },
  boxName: {
    marginTop: -25,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
});
