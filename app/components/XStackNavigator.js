import React, {useState, useEffect} from 'react';
import { 
  Button,
  View, 
  Image,
  Text} 
from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Home = ({ navigation }) => (
  <Screen>
    <Text>Welcome Screen</Text>
  </Screen>
);
const OtherScreen = () => (
  <Screen>
    <Text>Some other screen here</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} 
    options={{ title: "Home", headerStyle: { backgroundColor: "skyblue"},
     headerTintColor: "purple"}}/>
    <Stack.Screen name="OtherScreen" component={OtherScreen}
    options={{ title: "Some Other Screen", headerStyle: { backgroundColor: "pink"},
     headerTintColor: "green"}}/>
  </Stack.Navigator>
);
//two properties tabs
// const Account = () => (<Screen><Text>Account Page</Text></Screen>);
// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={Home}/>
//     <Tab.Screen name="Account" component={Account}/>
//   </Tab.Navigator>
// );

export default function AppStackNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    );
}