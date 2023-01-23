import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './CartCard.style';
import { Shadow } from 'react-native-shadow-2';
import NumericInput from 'react-native-numeric-input';
import { colorStyles } from 'src/styles/colors';
import useCart from 'src/store/cart';
import { IProduct } from 'src/shared/productInterface';
import CardButton from '../CardButton/CardButton';

type Props = {
  pic: string;
  title: string;
  item: IProduct;
};

export default function CartCard({ pic, title, item }: Props) {
  return (
    <View style={{ padding: 10 }}>
      <Shadow>
        <View style={styles.container}>
          <Image source={{ uri: pic }} style={styles.image} />
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
            {title}
          </Text>
          <CardButton item={item} buttonHeight={60} />
        </View>
      </Shadow>
    </View>
  );
}
