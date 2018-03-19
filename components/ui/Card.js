import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { WebBrowser } from 'expo';
const { width } = Dimensions.get('window');
import defaultImage from '../../assets/images/default-avatar.png';

export const Card = ({ avatar }) => {
  const avatarSource = defaultImage || avatar;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.avatarContainer}>
          <Image source={avatarSource} />
        </View>
        <View style={styles.nameAndTimeContainer}>
          <Text style={styles.name}>Eric Nam</Text>
          <Text style={styles.timeAndLocation}>
            9:31 PM · West Pam Beach, FL
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.content}
          source={require('../../assets/images/Eric-Nam.jpg')}
        />
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
