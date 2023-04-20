import { View, Text, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Checkout.style';
import useCart from 'src/store/cartStore';
import { ICartItem } from 'src/shared/cartInterface';
import CheckoutCard from 'src/components/CheckoutCard/CheckoutCard';
import { Shadow } from 'react-native-shadow-2';
import DummyApiModal from 'src/components/DummyApiModal/DummyApiModal';

const renderItem = ({ item }: { item: ICartItem }) => {
  return <CheckoutCard item={item} />;
};

export default function Checkout() {
  const { cart, totalPrice, totalItems } = useCart();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCheckout = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList renderItem={renderItem} data={cart} />
        <Shadow>
          <View style={styles.payment}>
            <Text style={styles.totalPrice}>
              {totalItems} items in total: {totalPrice.toFixed(2)} $
            </Text>
            <Pressable style={styles.button} onPress={handleCheckout}>
              <Text style={styles.checkoutText}>Pay</Text>
            </Pressable>
          </View>
        </Shadow>
      </View>
      <DummyApiModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        modalLabel="Sorry, but this is a fake API, you can't shop here!"
      />
    </>
  );
}
