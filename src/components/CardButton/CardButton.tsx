import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './CardButton.style';
import { IProduct } from 'src/shared/productInterface';
import useCart from 'src/store/cart';
import { ICartItem } from 'src/shared/cartInterface';
import NumericInput from 'react-native-numeric-input';
import { colorStyles } from 'src/styles/colors';

type Props = {
  item: IProduct;
};

export default function CardButton({ item }: Props) {
  const { cart, addToCart, removeFromCart, insertAmount } = useCart();

  let productInitial: number;
  useEffect(() => {
    productInitial = cart.find((product) => product.id === item.id)?.amount;

    console.log(productInitial);
    setProductAmount(productInitial);
  }, [cart]);

  const [productAmount, setProductAmount] = useState(
    cart.find((product) => product.id === item.id)?.amount || 1
  );

  console.log(productAmount);
  const isProductInCart = cart.some(
    (cartItem: ICartItem) => cartItem.id === item.id
  );

  const handleOnChange = (value: number) => {
    const product = cart.find((product) => product.id === item.id);

    if (value - product?.amount === 1) {
      addToCart(product.product);
    } else if (product?.amount - value === 1) {
      removeFromCart(product.product);
    } else if (value !== product?.amount) {
      insertAmount(product.product, value);
    }
  };

  return isProductInCart ? (
    <View>
      {/* <TouchableOpacity>
        <Text> - </Text>
      </TouchableOpacity> */}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputButton}>
            <NumericInput
              initValue={productAmount}
              value={productAmount}
              minValue={0}
              maxValue={20}
              onChange={handleOnChange}
              totalWidth={120}
              totalHeight={36}
              iconSize={16}
              step={1}
              valueType="integer"
              rounded
              textColor={colorStyles.text}
              rightButtonBackgroundColor={colorStyles.picker}
              leftButtonBackgroundColor={colorStyles.picker}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  ) : (
    <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
      <Text style={styles.addButtonText}>Add to Cart</Text>
    </TouchableOpacity>
  );
}
