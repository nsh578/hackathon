import React from 'react';
import { 
  KeyboardAvoidingView,
  View,
  StyleSheet,
} from 'react-native';

import { DismissKeyboard } from './hoc/DismissKeyboard';

import { InputField } from './ui/InputField';

// TODO: get assets
import user from '../assets/images/user.png';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  _getHandler = key => val => {
    this.setState({[key]: val});
  }
  
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
        <InputField
          icon={user}
          placeholder='Username'
          val={this.state.username}
          getHandler={this._getHandler('username')}
        />
        <InputField
          icon='lock'
          placeholder='Password'
          val={this.state.password}
          getHandler={this._getHandler('password')}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default DismissKeyboard(LoginForm);
