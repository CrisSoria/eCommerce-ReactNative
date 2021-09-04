import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import cart from '../../data/cart';
import CartProductItem from '../../components/CartProductItem/CartProductItem';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

const ShoppingCartScreen = () => {
  const navigation = useNavigation<any>();

  const totalPrice = cart.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  const onCheckOut = () => {
    navigation.navigate('address');
  };

  return (
    <View style={styles.page}>
      <View>
        <Text style={{fontSize: 18}}>
          Subtotal ({cart.length} items ) :{' '}
          <Text style={{color: '#e47911', fontWeight: 'bold'}}>
            {' '}
            $ {totalPrice.toFixed(2)}
          </Text>
        </Text>
        <Button
          text="Proceed to checkout"
          onPress={onCheckOut}
          containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b702'}}
        />
      </View>
      {/* Render Product Component*/}

      <FlatList
        style={{
          marginBottom: 150,
        }}
        data={cart}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCartScreen;
