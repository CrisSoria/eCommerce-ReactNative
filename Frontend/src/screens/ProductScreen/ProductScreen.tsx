import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useRoute} from '@react-navigation/native'; // para obtener detalles de nuestras rutas
import styles from './styles';

import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import Button from '../../components/Button/Button';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options?.[0]);
  const [quantity, setQuantity] = useState(1);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const route = useRoute();
  // console.log(route.params);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image carousel */}
      <ImageCarousel images={product.images} />

      {/* Option selector */}
      {product.options && (
        <Picker
          selectedValue={selectedOption}
          onValueChange={itemValue => setSelectedOption(itemValue)}>
          {product.options.map((option, i) => (
            <Picker.Item key={i} label={option} value={option} />
          ))}
        </Picker>
      )}

      {/* Price */}
      <Text style={styles.price}>
        $ {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantiti selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button
        text={'Add To Cart'}
        onPress={() => {
          console.log('agregado al carrito');
        }}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.log('pantallade compra');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
