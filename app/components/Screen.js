import Contants from 'expo-constants';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

function Screen({children}) {
  return (
    <SafeAreaView style={styles.screen}>
    {children}
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  screen : {
    paddingTop : Contants.statusBarHeight,
    flex: 1,
  }
})