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
const { width } = Dimensions.get('window');

// Assets
import dot from '../assets/images/greyDot.png';

// UI
import Feed from '../components/Feed';
import { Logo } from '../components/ui/Logo';
import { Avatar } from '../components/ui/Avatar';
import { HorizontalSeparator } from '../components/ui/HorizontalSeparator';
import { HorizontalCard } from '../components/ui/HorizontalCard';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    currentPage: 0,
  };

  _onScroll = e => {
    const { currentPage } = this.state;
    const newPageNum = Math.round(e.nativeEvent.contentOffset.x / width);
    newPageNum != currentPage && this.setState({ currentPage: newPageNum });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topNav}>
          <Logo />
          <Avatar source={''} />
        </View>
        <View style={styles.homeTop}>
          <ScrollView
            style={styles.horizScroll}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={this._onScroll}
          >
            <HorizontalCard
              title={'Check out Eric Nam’s new weekly challenges.'}
              image={''}
            />
            <HorizontalCard
              title={'Check out Eric Nam’s new weekly challenges.'}
              image={''}
            />
            <HorizontalCard
              title={'Check out Eric Nam’s new weekly challenges.'}
              image={''}
            />
          </ScrollView>
          <Dots
            style={styles.dotsContainer}
            current={this.state.currentPage}
            list={[0, 1, 2]}
          />
        </View>
        <HorizontalSeparator />
        <Feed type={'Artist'} />
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode',
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes',
    );
  };
}

const Dots = ({ list, current }) => {
  return (
    <View style={styles.dots}>
      {list.map((i, index) => {
        return (
          <Image
            key={index}
            source={dot}
            style={current === i ? styles.dotFilled : styles.dotDefault}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.layoutBackground,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  topNav: {
    display: 'flex',
    flexDirection: 'row',
    height: 79,
  },
  homeTop: {
    width: width,
    display: 'flex',
    alignItems: 'center',
  },
  horizScroll: {
    position: 'relative',
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '23%',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 15,
  },
  dotFilled: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
    tintColor: '#50e3c2',
  },
  dotDefault: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
    opacity: 0.5,
  },
});
