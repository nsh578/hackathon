import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

// Assets
import tempPlaceHolderImage from '../../assets/images/Eric-Nam.jpg';

export const HorizontalCard = ({
  title,
  image,
  contentTitle,
  contentDescription,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.body}>
        {/* Replace Temp Image With Real Pulled One */}
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={tempPlaceHolderImage} />
        </View>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Nam Nation Challenge</Text>
          <Text style={styles.contentDescription}>
            Share 3 of Eric Nam's posts with friends outside of Venu.
          </Text>
        </View>
        <View style={styles.chevronContainer}>
          <Text style={styles.chevron}>></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '600',
    width: width - 40,
    marginBottom: 10,
  },
  body: {
    width: width - 40,
    minHeight: 97,
    backgroundColor: '#f1f1f1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    paddingTop: 13,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 11,
  },
  imgContainer: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 70,
    width: 70,
  },
  img: {
    height: 70,
    resizeMode: 'contain',
  },
  content: {
    position: 'relative',
    paddingLeft: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  contentTitle: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  contentDescription: {
    paddingTop: 2.5,
    color: '#3b3b3b',
  },
  chevronContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevron: {
    fontSize: 26,
    marginRight: 12,
    color: '#898989',
  },
});
