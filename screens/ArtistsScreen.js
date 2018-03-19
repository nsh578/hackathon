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
import SearchBar from '../components/SearchBar';
import { Logo } from '../components/ui/Logo';
import { Avatar } from '../components/ui/Avatar';
import { HorizontalSeparator } from '../components/ui/HorizontalSeparator';

export default class ClubsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topNav}>
          <Text style={styles.pageTitle}>My Artists</Text>
          <Avatar source={''} />
        </View>
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
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
    height: 200,
    paddingBottom: 35,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
  }
});
