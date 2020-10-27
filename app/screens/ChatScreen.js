import React from 'react';
import { Image,
   View,
   StyleSheet,
   Platform,
   StatusBar,
   } from 'react-native';

function ChatScreen(props) {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
    <Image style={styles.chat} resizeMode="contain"
    source={require('../assets/chatBackground.jpg')}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "black",
    flex: 1,
  },
  chat : {
    width: "100%",
    height: "100%",
  }
})

export default ChatScreen;