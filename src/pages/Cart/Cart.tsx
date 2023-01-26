import { View, Text, FlatList, Pressable } from 'react-native';
import React from 'react';
import useCart from 'src/store/cart';
import CartCard from 'src/components/CartCard/CartCard';
import { styles } from './Cart.style';
import useAuth from 'src/store/auth';

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

  // on login open a modal for username and password, use formik or yup for that

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
          <Pressable style={styles.buttons} onPress={() => {}}>
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
    </>
  );
}
