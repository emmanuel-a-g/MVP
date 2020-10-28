import React from 'react';
import { StyleSheet, View } from 'react-native';

function ListItemSeperator() {
  return (
    <View style={styles.seperator}></View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "whitesmoke",
  }
})

export default ListItemSeperator;