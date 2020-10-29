import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MessagesScreen from '../screens/MessagesScreen';
import Screen from '../components/Screen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = ({setLogin}) => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Chat" component={MessagesScreen}/>
    <Tab.Screen name="Account"> 
        {(props) => <AccountScreen {...props} setLogin={setLogin} />}
    </Tab.Screen>
    <Tab.Screen name="More" component={Screen}/>
    </Tab.Navigator>
  );
}

export default AppNavigator;