import { View, Text, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import useCart from 'src/store/cart';
import CartCard from 'src/components/CartCard/CartCard';
import { styles } from './Cart.style';
import useAuth from 'src/store/auth';
import LoginModal from 'src/components/LoginModal/LoginModal';

const renderItem = ({ item }) => (
  <CartCard
    pic={item.product.image}
    title={item.product.title}
    item={item.product}
  />
);

export default function Cart() {
  const { cart, totalPrice } = useCart();
  const { isUserLoggedIn } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <Pressable style={[styles.buttons, styles.checkout]}>
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
