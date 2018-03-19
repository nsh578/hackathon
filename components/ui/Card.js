import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// Assets
import defaultImage from '../../assets/images/default-avatar.png';
import tempPlaceHolderImage from '../../assets/images/Eric-Nam.jpg';

export const Card = ({ avatar }) => {
  /*
    TODO: Make sure props are passed correctly to Card.
          Needs avatar, name, data, location, and content (Image/Video/etc.)
          Use native base card component
  */
  const avatarSource = defaultImage || avatar;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.avatarContainer}>
          <Image source={avatarSource} />
        </View>
        <View style={styles.nameAndTimeContainer}>
          <Text style={styles.name}>
            Eric Nam
            {/* TODO: Replace with pulled artist name */}
          </Text>
          <Text style={styles.timeAndLocation}>
            9:31 PM · West Pam Beach, FL
            {/* TODO: Replace with pulled artist post time and location */}
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {/* TODO: Replace source with pulled artist post image data */}
        <Image style={styles.content} source={tempPlaceHolderImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginBottom: 20,
    height: 260,
  },
  top: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomColor: '#00000030',
    borderBottomWidth: 1,
    zIndex: 2,
    backgroundColor: '#f1f1f1',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 11,
    paddingRight: 11,
    flexDirection: 'row',
  },
  avatarContainer: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  nameAndTimeContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  name: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timeAndLocation: {
    color: '#333',
    opacity: 0.4,
    lineHeight: 15,
  },
  contentContainer: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  content: {},
});

Card.defaultProps = {
  
};
