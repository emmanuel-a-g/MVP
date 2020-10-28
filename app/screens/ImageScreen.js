import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Button,
  Image} 
from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import Screen from './app/components/Screen';

export default function ImageScreen() {
  const [imageUri, setImageUri] = useState();  
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      alert('You need to enable permissions to access library!');
    }
  }
  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log(error, ':error launching Image')
    }
  };

  return (
    <Screen>
    <Button title="Select image"
    onPress={selectImage}/>
    <Image source={{ uri: imageUri }} style={{width: "90%", height: "90%", alignSelf: "center"}}/>
    </Screen>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
  }
});
