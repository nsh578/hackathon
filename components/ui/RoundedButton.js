import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

export const RoundedButton = (props) => (
  <Button
    style={styles.roundedButton}
    onPress={props.handlePress}
  >
    <Text style={styles.buttonText}>{props.text}</Text>
  </Button>
);

const styles= StyleSheet.create({
  roundedButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b2ee',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: '5%',
  },
});

RoundedButton.defaultProps = { text: 'Request'};
