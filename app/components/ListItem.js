import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import React from 'react';
import AppText from './AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subtitle, image, IconComponent, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions} >
      <TouchableHighlight 
      onPress={onPress}
      underlayColor={colors.light}  
      >
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image}/>}
      
        <View style={styles.smallContainer}>
        <AppText style={styles.title} title={title}></AppText>
        {subtitle && <AppText style={styles.subtitle} subtitle={subtitle}></AppText>}
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
    padding: 10,
    backgroundColor: 'white',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: "center",
  },
  title : {
    fontWeight: "500",
  },
  subtitle: {
    color: "grey",
  },
  smallContainer: {
    marginVertical: 5,
    marginLeft: 10,
  }
})