import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import styles from './styles';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);
  function printRatingStars(rating: number) {
    const starFull = Math.trunc(rating);
    const startHalf = rating - starFull > 0;
    const emptyStars = 5 - starFull;

    const componente = [];

    const compStar = (name: string, indx: number) => (
      <FontAwesome
        key={indx}
        style={styles.star}
        name={name}
        size={18}
        color={'#e47911'}
      />
    );

    for (let i = 0; i < starFull; i++) {
      componente.push(compStar('star', i));
    }
    if (startHalf) {
      componente.push(compStar('star-half-full', 6));
    }
    for (let i = 1; i < emptyStars; i++) {
      componente.push(compStar('star-o', i + 7));
    }

    return componente;
  }

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {printRatingStars(item.avgRating)}
            <Text>{item.ratings}</Text>
          </View>
          {/* Price */}
          <Text style={styles.price}>
            $ {item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
