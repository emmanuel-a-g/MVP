import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, color}) {
  //color required!

  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>  
  );
}
const styles = StyleSheet.create({
  button : {
    borderRadius: 25, 
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginVertical: 10,
  }, 
  text : {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
  },
})
export default AppButton;