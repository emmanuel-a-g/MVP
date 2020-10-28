import Contants from 'expo-constants';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
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