import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({title, subtitle, style}) {
  if (!title) {
    title = subtitle;
  }

  return (
    <Text style={[styles.text, style]}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  text : {
    fontSize: 18, 
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
});

export default AppText;