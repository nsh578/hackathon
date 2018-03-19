import React from 'react';
import { Image, View, StyleSheet, Text, Dimensions } from 'react-native';
import { RoundedButton } from './RoundedButton';

const { width } = Dimensions.get('window');

export const Hero = (props) => {
  console.log(props.backgroundImage)
  const { logo, logoText, backgroundImage, lead } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={backgroundImage}
      />
      <View style={styles.top}>
        {
          logo &&
          <Image
            style={styles.heroImage}
            source={logo}
          />
        }
        {
          logoText &&
          <Image
            style={styles.heroText}
            source={logoText}
          />
        }
      </View>
      <View style={styles.bottom}>
        <Text style={styles.lead}>{props.lead}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  background: {
    position: 'absolute',
  },
  backgroundImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  top: {
    flex: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    height: '36%',
    resizeMode: 'contain',
  },
  heroText: {
    marginTop: '12%',
    height: '12%',
    resizeMode: 'contain',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lead: {
    padding: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 19,
    letterSpacing: 1.2,
    position: 'absolute',
    top: 0,
  }
});
