import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { WebBrowser } from 'expo';
import Colors from '../constants/Colors';
const { width } = Dimensions.get('window');

// UI
import Feed from '../components/Feed';
import { Logo } from '../components/ui/Logo';
import { Avatar } from '../components/ui/Avatar';
import { HorizSeperator } from '../components/ui/HorizSeperator';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
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
            <Text style={styles.horizCardTitle}>
              Check out Eric Nam's new weekly challenges.
            </Text>
            <ScrollView
              style={styles.horizScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
            >
              <View style={styles.horizCardContainer}>
                <View style={styles.horizCard}>
                  <Text>ChallengeCard</Text>
                </View>
              </View>
              <View style={styles.horizCardContainer}>
                <View style={styles.horizCard}>
                  <Text>ChallengeCard2</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <HorizSeperator />
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
  },
  horizCardTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    width: width - 40,
  },
  horizScroll: {
    position: 'relative',
    paddingTop: 10,
  },
  horizCardContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  horizCard: {
    width: width - 40,
    backgroundColor: '#f1f1f1',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    paddingTop: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 11,
  },
});
