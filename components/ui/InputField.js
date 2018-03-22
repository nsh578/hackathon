import React from 'react';
import { Image, TextInput, View, StyleSheet } from 'react-native';

export const InputField = (props) => {
  const { isSecure, val, getHandler, placeholder, returnKeyType='default', image } = props;
  return (
    <View style={styles.inputContainer}>
      <Image
        style={styles.inputIcon}
        source={image}
      />
      <TextInput
        style={styles.input}
        onChangeText={getHandler}
        placeholder={placeholder}
        returnKeyType={returnKeyType}
        secureTextEntry={isSecure}
        value={val}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#f1f1f1',
    padding: 10,
    margin: 10,
  },
  inputIcon: {
    flex: 1,
    paddingLeft: 10,
    resizeMode: 'contain',
  },
  input: {
    flex: 9,
    fontSize: 20,
  },
});

