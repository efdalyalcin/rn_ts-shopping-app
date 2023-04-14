import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { styles } from './Checkout.style';
import useCart from 'src/store/cart';
import { ICartItem } from 'src/shared/cartInterface';

const renderItem = ({ item }: { item: ICartItem }) => {
  // general layout

  // 3 x price  --------  item name
  // 2 x price ---- item name

  // total 5 item total price 123841 TL
  // pay button

  // then a modal says it is a dummy app thanks for giving feedback and *****
  //${item?.product?.price} x
  return (
    <View>
      <Text>{`${item?.amount} x ${item?.product?.title} = $${
        item?.product?.price * item?.amount
      }`}</Text>
    </View>
  );
};

export default function Checkout() {
  const { cart, totalPrice, totalItems } = useCart();
  return (
    <View style={styles.container}>
      <FlatList renderItem={renderItem} data={cart} />
      <Text></Text>
    </View>
  );
}
