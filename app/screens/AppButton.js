import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onTouch, color}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={() => onTouch()}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>  
  );
}
const styles = StyleSheet.create({
  button : {
    backgroundColor: "yellow",
    borderRadius: 25, 
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginVertical: 8,
  }, 
  text : {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "bold",
  },
})
export default AppButton;