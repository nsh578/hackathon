import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

export const DismissKeyboard = (Component) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1}}>
        <Component {...props}>
          {children}
        </Component>
      </View>
    </TouchableWithoutFeedback>
  );
};
