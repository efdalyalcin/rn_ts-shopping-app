import { View, Text, FlatList } from 'react-native';
import React from 'react';
import useCart from 'src/store/cart';
import CartCard from 'src/components/CartCard/CartCard';

const renderItem = ({ item }) => (
  <CartCard
    pic={item.product.image}
    title={item.product.title}
    item={item.product}
  />
);

export default function Cart() {
  const { cart } = useCart();

  return <FlatList renderItem={renderItem} data={cart} />;
}
