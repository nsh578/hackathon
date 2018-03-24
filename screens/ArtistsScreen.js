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
import {Header} from '../components/Header';
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
        <Header title={'My Artist'}/>
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
        <ScrollView>
          <Text style={styles.title}>Following</Text>
          <View style={styles.followingContainer}>
            <Box artistName={'Eric Nam'}/>
            <Box artistName={'The Strokes'}/>
          </View>
          <HorizontalSeparator />
          <View style={styles.requestContainer}>
            <Text style={styles.title}>Request more artists!</Text>
            <Text style={styles.subtitle}>We’ll let you know when they claim their accounts!</Text>
            <View style={styles.artistRequestContainer}>
              <Box />
              <RoundedButton />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.layoutBackground,
  },
  searchContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  followingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '5%',
  },
  title: {
    color: '#fff',
    fontSize: 25,
    marginLeft: '5%',
    marginTop: 5,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  requestContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  artistRequestContainer: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  }
});
