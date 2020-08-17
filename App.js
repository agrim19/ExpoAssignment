import React from 'react';
import MainScreen from './Screens/Main.js';
import UserScreen from './Screens/User.js';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = ()=>{
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={MainScreen} />
          <Drawer.Screen name='Users' component={UserScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;
