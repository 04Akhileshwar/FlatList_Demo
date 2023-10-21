import React from 'react';
import { Header, createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
