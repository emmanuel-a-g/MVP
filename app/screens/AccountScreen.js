import React, {useEffect, useState} from 'react';
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
const people = {
  3 : {id: '3', title: 'Pitbull'},
  2 : {id: '2', title: 'Enrique Iglesias'},
  1 : {id: '1', title: 'Marcos Casas'},
}

function AccountScreen({setLogin, user}) {
  // const [theuser, setUser] = useState({id: 0, title: 'User', image: require('../assets/somebody.jpg')});
  
  // const determineUser = () => {
  //   if (user === 1) {
  //     console.log('updating')
  //     setUser({id : people[1][id], title: people[1][title], 
  //     image: require('../assets/somebody.jpg') })
  //   } else if (user === 2) {
  //     setUser({id : people[2][id], title: people[2][title], 
  //     image: require('../assets/somebodyTwo.jpg')})
  //   } else {
  //     setUser({id : people[3][id], title: people[3][title], 
  //     image: require('../assets/somebodyThree.jpg')})
  //   }
  // }
  // useEffect(() => {
  //   determineUser();
  // }, []);

  return (
    <Screen style={styles.screen}>

    <View style={styles.container}>
    <ListItem 
      title={"Pitbull"}
      subtitle={"2email@gmail.com"}
      image={require('../assets/somebodyThree.jpg')}
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