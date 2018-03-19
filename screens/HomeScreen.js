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
          <View style={styles.horizCardContainer}>
            <ScrollView
              style={styles.horizScroll}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onScroll={this._onScroll}
            >
              <View style={styles.horizCardContainer}>
                <Text style={styles.horizCardTitle}>
                  Check out Eric Nam's new weekly challenges.
                </Text>
                <View style={styles.horizCard}>
                  <Text>ChallengeCard</Text>
                </View>
              </View>
              <View style={styles.horizCardContainer}>
                <Text style={styles.horizCardTitle}>
                  Check out Eric Nam's new weekly challenges.
                </Text>
                <View style={styles.horizCard}>
                  <Text>ChallengeCard2</Text>
                </View>
              </View>
              <View style={styles.horizCardContainer}>
                <Text style={styles.horizCardTitle}>
                  Check out Eric Nam's new weekly challenges.
                </Text>
                <View style={styles.horizCard}>
                  <Text>ChallengeCard3</Text>
                </View>
              </View>
            </ScrollView>
            <Dots
              style={styles.dotsRow}
              current={this.state.currentPage}
              list={[0, 1, 2]}
            />
          </View>
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
      {list.map(i => {
        return (
          <Image
            key={i}
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
  contentContainer: {
    paddingTop: 30,
  },
  topNav: {
    display: 'flex',
    flexDirection: 'row',
    height: 79,
  },
  homeTop: {
    width: '100%',
    height: 200,
    paddingBottom: 35,
  },
  horizCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 150,
  },
  horizScroll: {
    position: 'relative',
  },
  horizCardContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  horizCardTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    width: width - 40,
    marginBottom: 10,
  },
  horizCard: {
    width: width - 40,
    height: 94,
    backgroundColor: '#f1f1f1',
    flex: 2,
    flexDirection: 'row',
    zIndex: 2,
    borderRadius: 8,
    paddingTop: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 11,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  dotFilled: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    tintColor: '#50e3c2',
  },
  dotDefault: {
    height: 14,
    width: 14,
    resizeMode: 'contain',
    opacity: 0.5,
  },
});
