import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';

import defaultImage from '../assets/images/default-avatar.png';

const avatarSource = defaultImage || avatar;

export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style= {styles.container}>
        <TouchableHighlight
          style= {styles.post}
          >
            <View>
              <View style={styles.avatarContainer}>
                <Image source={avatarSource} />
              </View>
              <View style ={styles.shareContainer}>
                <Text style={styles.placeholder}>Share a post....</Text>
              </View>
            </View>
          </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  post: {
    flexDirection: 'row',
    padding: 10,
    // alignItems: 'center',
  },
  placeholder: {
    fontSize: 20,
    fontWeight: '600',
  },
  avatar: {
  },
});
