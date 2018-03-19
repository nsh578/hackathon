import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Colors from '../constants/Colors';

// UI
import Feed from '../components/Feed';
import SearchBar from '../components/SearchBar';
import { Box } from '../components/ui/Box';
import { Logo } from '../components/ui/Logo';
import { RoundedButton } from '../components/ui/RoundedButton';
import { Avatar } from '../components/ui/Avatar';
import { HorizontalSeparator } from '../components/ui/HorizontalSeparator';

import tempPlaceHolderImage from '../assets/images/Eric-Nam.jpg';

export default class ClubsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topNav}>
          <Text style={styles.pageTitle}>My Clubs</Text>
          <Avatar source={''} />
        </View>
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
        <View style={styles.boxContainer}>
          <Box artistName={'Eric Nam'}/>
          <Box artistName={'The Strokes'}/>
        </View>
        <Feed type={'Fan'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.layoutBackground,
  },
  pageTitle: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '600',
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 10,
  },
  topNav: {
    width: '100%',
    paddingBottom: 10,
  },
  searchContainer: {
    height: 79,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 115,
    width: 115,
    borderRadius: 4,
  },
  boxName: {
    marginTop: -25,
    backgroundColor: 'rgba(0,0,0,.5)',
  }
});
