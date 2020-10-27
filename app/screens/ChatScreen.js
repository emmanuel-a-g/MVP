import React from 'react';
import { Image,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

import colors from '../config/colors.js';

function ChatScreen(props) {
  return (
    <View style={styles.container}>

    <View style={styles.closeIcon}></View>
    <View style={styles.deleteIcon}></View>

    <Image style={styles.chat} resizeMode="contain"
    source={require('../assets/chatBackground.jpg')}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black,
    flex: 1,
  },
  chat : {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,

  }
})

export default ChatScreen;