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
      <View>
        <Text style={styles.title}>{artistName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer:{
    borderRadius: 8,
    margin: 5,
    marginBottom: '10%',
    height: 150,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 4,
  },
  title: {
    // marginTop: -25,
    color: '#fff',
    fontSize: 20,
  },
});
