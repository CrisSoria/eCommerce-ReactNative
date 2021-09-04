import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

const Stack = createStackNavigator();

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen
        name="HomeScreen"
        // options={{headerShown: false}}
      >
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;
