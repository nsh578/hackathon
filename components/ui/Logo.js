import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Logo = props => (
  <View style={styles.logoContainer}>
    <Text style={styles.logo}>VENU</Text>
  </View>
);

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 34,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 32,
    height: 72,
    fontWeight: 'bold',
  },
});
