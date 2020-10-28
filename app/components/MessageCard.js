import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function MessageCard({title, subtitle, image}) {
  return (
    <View style={styles.card}>

    <Image style={styles.image} source={require('../assets/somebody.jpg')}/>

    <View style={styles.container}>
    <AppText style={styles.title} title={title}/>
    <AppText style={styles.subtitle} title={subtitle}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card : {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20, 
    overflow: "hidden",
  },
  container : {
    padding: 20,
  },
  image : {
    alignSelf: "center",
    //width: 100%,
    //height: 200,
  },
  subtitle : {
    color: colors.black,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
    color: colors.black,
  }
})

export default MessageCard;