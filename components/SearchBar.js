import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  Text,
} from 'react-native';

// Assets


export default class SearchBar extends React.Component {
 constructor(props) {
   super(props);
   this.state = { text: '' };
 }
  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder = "Search"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 30,
    borderWidth: 0,
    // borderColor: 'grey',
    backgroundColor : "#FFF",
  },
});
