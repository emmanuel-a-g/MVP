import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import MessagesScreen from '../screens/MessagesScreen';
import Screen from '../components/Screen';
import AccountScreen from '../screens/AccountScreen';
import AddMessageScreen from '../screens/AddMessageScreen';


const Tab = createBottomTabNavigator(); 

const AppNavigator = ({setLogin, user, returnCount, count}) => {
  return (
    <Tab.Navigator>

    <Tab.Screen name="Chat" options={{tabBarIcon: ({color, size}) => 
    <MaterialCommunityIcons name="chat" color={color} size={size}/>}}> 
        {(props) => <MessagesScreen {...props} returnCount={returnCount} />}
    </Tab.Screen>

    <Tab.Screen name="Account" options={{tabBarIcon: ({color, size}) => 
    <MaterialCommunityIcons name="account" color={color} size={size}/>}}> 
        {(props) => <AccountScreen {...props} user={user} setLogin={setLogin} />}
    </Tab.Screen>
    
    <Tab.Screen name="Reply" options={{tabBarIcon: ({color, size}) => 
    <MaterialCommunityIcons name="message-plus" color={color} size={size}/>}}> 
        {(props) => <AddMessageScreen {...props} user={user} setLogin={setLogin} count={count} />}
    </Tab.Screen>

    </Tab.Navigator>
    
  );
}

export default AppNavigator;