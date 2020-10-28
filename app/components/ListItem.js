import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import React from 'react';
import AppText from './AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subtitle, image, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight 
    onPress={onPress}
    underlayColor={colors.light}  
    >
    
    <View style={styles.container}>
    <Image style={styles.image} source={image}/>
    
    <View style={styles.smallContainer}>
    <AppText style={styles.title} title={title}></AppText>
    <AppText style={styles.subtitle} subtitle={subtitle}></AppText>
    </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container : {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 25,
    marginRight: 10, 
  },
  title : {
    fontWeight: "500",
  },
  subtitle: {
    color: "grey",
  },
  smallContainer: {
    marginVertical: 5, //might need to change later?
  }
})