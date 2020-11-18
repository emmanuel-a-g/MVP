import React from 'react';
import { StyleSheet, TextInput, View, Platform, TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
    { icon && <MaterialCommunityIcons name={icon} size={20}
     color={colors.medium}
     style={styles.icon}/>}
    <TextInput style={styles.textInput} 
    {...otherProps}
    />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 20,
    flexDirection: "row",
    padding: 20,
    width: "100%",
    paddingVertical: 10,
  }, 
  textInput : {
    color: colors.dark,
    fontSize: 18, 
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icon: {
    margin: 10,
  }
})

export default AppTextInput;