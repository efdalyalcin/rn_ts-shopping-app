import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './CardButton.style';
import { IProduct } from 'src/shared/productInterface';
import useCart from 'src/store/cart';

type Props = {
  item: IProduct;
};

export default function CardButton({ item }: Props) {
  const { addToCart } = useCart();

  return (
    <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
      <Text style={styles.addButtonText}>Add to Cart</Text>
    </TouchableOpacity>
  );
}
