import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../components/Explore';
import Home from '../components/Home';
import Today from '../components/Today';
import Social from '../components/Social';
import HomeIcon from '../assets/home';
import ExploreIcon from '../assets/ Explore';
import TodayIcon from '../assets/today';
import SocialIcon from '../assets/social';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <ExploreIcon />,
        }}
      />
      <Tab.Screen
        name="Today"
        component={Today}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <TodayIcon />,
        }}
      />
      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <SocialIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
