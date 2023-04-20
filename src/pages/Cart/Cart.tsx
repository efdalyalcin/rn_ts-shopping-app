import { View, Text, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useCart from 'src/store/cartStore';
import CartCard from 'src/components/CartCard/CartCard';
import { styles } from './Cart.style';
import useAuth from 'src/store/authStore';
import LoginModal from 'src/components/LoginModal/LoginModal';

const renderItem = ({ item }) => (
  <CartCard
    pic={item.product.image}
    title={item.product.title}
    item={item.product}
  />
);

export default function Cart() {
  const navigation = useNavigation();

  const { cart, totalPrice } = useCart();
  const { isUserLoggedIn } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCheckout = () => {
    //@ts-ignore
    navigation.navigate('Checkout');
  };

  return (
    <>
      {cart.length ? (
        <FlatList renderItem={renderItem} data={cart} />
      ) : (
        <View style={styles.listEmpty} pointerEvents="none">
          <Text style={styles.text}>There is no item in your Cart</Text>
        </View>
      )}
      {!isUserLoggedIn ? (
        <View style={styles.container}>
          <Pressable
            style={styles.buttons}
            onPress={() => {
              setIsModalVisible(true);
            }}
          >
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.checkoutContainer}>
          <Text>{`Total price: ${totalPrice.toFixed(2)} $`}</Text>
          <Pressable
            style={[styles.buttons, styles.checkout]}
            onPress={handleCheckout}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
          </Pressable>
        </View>
      )}
      <LoginModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        modalLabel="Sign in"
      />
    </>
  );
}
