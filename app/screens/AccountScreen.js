import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
  
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import { color } from 'react-native-reanimated';

  const menuItems = [
    {title: "Edit Profile",
      icon: {
        name: "account-box",
        backgroundColor: colors.secondary,
      }
    },
    {title: "Settings",
      icon: {
        name: "settings",
        backgroundColor: colors.primary,
      }
    
    }
  ]

function AccountScreen({setLogin}) {
  return (
    <Screen style={styles.screen}>

    <View style={styles.container}>
    <ListItem 
      title="Emmanuel Garcia"
      subtitle="email@gmail.com"
      image={require('../assets/somebody.jpg')}
    />
    <ListItem />
    </View>
    <View>
      <FlatList data={menuItems}
      keyExtractor={(menuItem)  => (menuItem.title)}
      renderItem={({item}) => <ListItem title={item.title} 
      IconComponent={
        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
      } />}
      />
    </View>
    <ListItem
      title="LogOut"
      onPress={setLogin}
      IconComponent={<Icon name="logout" backgroundColor="grey"/>}
    />
      
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
    maxHeight: 100,
  }
  
})
export default AccountScreen; 