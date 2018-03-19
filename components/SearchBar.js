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
   this.state = { text: 'Search' };
 }
  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    // paddingTop: 14,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    height: 72,
    borderColor: 'grey',
    borderWidth: 1,
    textAlign: 'center',
    height: 50,
    borderWidth: 2,
    borderRadius: 20 ,
    backgroundColor : "#FFF",
    fontSize: 20,
  },
});
