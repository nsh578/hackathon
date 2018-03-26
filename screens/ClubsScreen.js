import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';

// UI
import Feed from '../components/Feed';
import SearchBar from '../components/SearchBar';
import { Header } from '../components/Header';
import { Box } from '../components/ui/Box';
import { Logo } from '../components/ui/Logo';
import { RoundedButton } from '../components/ui/RoundedButton';
import { Avatar } from '../components/ui/Avatar';
import { HorizontalSeparator } from '../components/ui/HorizontalSeparator';


export default class ClubsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title={'My Clubs'}/>
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
        <View style={styles.artistContainer}>
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
  searchContainer: {
    alignItems: 'center',
    marginBottom: 20,
    //paddingHoiztonal: 10,
  },
  artistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
