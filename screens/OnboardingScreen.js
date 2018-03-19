import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import { Hero } from '../components/ui/Hero';
import { RoundedButton } from '../components/ui/RoundedButton';

// get assets
import a from '../assets/images/onboardingA.png';
import b from '../assets/images/onboardingB.png';
import c from '../assets/images/onboardingC.png';
import d from '../assets/images/onboardingD.png';
import dot from '../assets/images/greyDot.png';
import logo from '../assets/images/framer.png';
import logoText from '../assets/images/VenuText.png';

const { width } = Dimensions.get('window');

const messages = [
  'Venu is a fan loyalty program built by artists, just for you.',
  'Gain points by connecting with artists and other fans, completing challenges, checking into concerts, and more.',
  'Earning points is easy and will boost your fan level and ranking.',
  'Each new level brings you more awesome perks, cooler rewards, and closer contact with your favorite artists.',
];

class OnboardingScreen extends React.Component {
  static navigationOptions = {
    title: 'onboarding',
  };

  state = {
    last: false,
    currentPage: 0,
  };

  _handlePress = () => {
    if (this.state.currentPage === 0) {
      this.sv.scrollTo({ x: width, y: 0, animated: true });
    } else {
      const newX = (this.state.currentPage + 1) * width;
      this.sv.scrollTo({ x: newX, y: 0, animated: true });
    }
  };

  _onScroll = e => {
    const newPageNum = Math.round(e.nativeEvent.contentOffset.x / width);
    if (newPageNum >= 4) {
      this.setState({ last: true });
    } else {
      this.setState({ last: false });
    }

    newPageNum != this.state.currentPage &&
      this.setState({
        currentPage: newPageNum,
      });
  };

  render() {
    const { last } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          ref={sv => (this.sv = sv)}
          horizontal={true}
          pagingEnabled={true}
          onScroll={this._onScroll}
        >
          <Hero
            lead={messages[0]}
            backgroundImage={a}
            logo={logo}
            logoText={logoText}
          />
          <Hero lead={messages[1]} backgroundImage={b} />
          <Hero lead={messages[2]} backgroundImage={c} />
          <Hero lead={messages[3]} backgroundImage={d} />
          <Hero lead={'last'} backgroundImage={a} last={last} />
        </ScrollView>
        <View style={styles.bottom}>
          <Dots current={this.state.currentPage} list={[0, 1, 2, 3, 4]} />
          <View style={styles.button}>
            {!last && (
              <RoundedButton handlePress={this._handlePress} text="Next" />
            )}
          </View>
        </View>
      </View>
    );
  }
}

const Dots = props => {
  return (
    <View style={styles.dots}>
      {props.list.map(i => {
        return (
          <Image
            key={i}
            source={dot}
            style={props.current === i ? styles.dotFilled : styles.dotDefault}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000',
  },
  bottom: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
  },
  button: {
    flex: 1,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dotFilled: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    tintColor: '#009cd7',
  },
  dotDefault: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    opacity: 0.5,
  },
});

export default OnboardingScreen;
