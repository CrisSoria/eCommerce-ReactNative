import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface ProductItem {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItem) => {
  const navigation = useNavigation<any>();
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

  const onPress = () => {
    navigation.navigate('ProductDetails', {id: item.id});
  };

  return (
    <Pressable onPress={onPress} style={styles.root}>
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
    </Pressable>
  );
};

export default ProductItem;
