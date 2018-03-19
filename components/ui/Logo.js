import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

// Assets
import logo from '../../assets/images/VenuText.png';

export const Logo = props => (
  <View style={styles.logoContainer}>
    <Image style={styles.logo} source={logo} />
  </View>
);

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    width: 72,
    height: 18,
    fontWeight: 'bold',
  },
});
