import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={ShoppingCartScreen} name="cart" />
      <Stack.Screen component={AddressScreen} name="address" />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
