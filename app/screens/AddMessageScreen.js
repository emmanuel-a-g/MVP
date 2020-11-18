import React, { useReducer, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import colors from '../config/colors';
import axios from 'axios';

function AddMessageScreen({user, count}) {
  const [input, setInput] = useState('')

  const postToServer = () => {
    let newMessageId = count + 1;
    let textObj = {
      description: input,
      title: user.title,
      id: user.id,
      image: user.image,
      messageid: newMessageId,
    };
    axios.post('http://192.168.1.235:9000/chats', textObj)
    .then((res) => {
      console.log('sucess posting message');
      alert('posted!');
    })
    .catch((err) => {
      console.log('err post:', err);
    })
    setTimeout(() => {
      setInput('');
    }, 500);
  }

  return (
    <TouchableWithoutFeedback onPress={() => console.log('dismissed')}>
    <Screen style={{padding: 20}}>
    

    <View style={styles.container}><Text style={styles.text}>Post to the Chat</Text></View>
    
    <AppTextInput 
    icon="message" 
    multiline={true} 
    padding={10} 
    height={100}
    value= {input}
    onChangeText={(text) => setInput(text)}
    />
    
        <View style={styles.container}></View>
        <Button  title="post" color={colors.primary} 
        onPress={() => {console.log(input); postToServer();}}>
        </Button>
        
        </Screen>
  </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container : {
    paddingTop: 30,
    alignSelf: "center",
    paddingBottom: 20,
  },
  button: {
    borderRadius: 25,
  },
  text: {
    fontSize: 18, 
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
})

export default AddMessageScreen;