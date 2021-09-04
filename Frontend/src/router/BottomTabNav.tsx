import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#ffbd74',
        tabBarActiveTintColor: '#e47911',
        headerShown: false,
      }}>
      <Tab.Screen
        component={HomeStack}
        name="home"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={25} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="profile"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingCartStack}
        name="shoppingCart"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="more"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
