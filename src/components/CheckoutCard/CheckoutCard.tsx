import { View, Text, Image } from 'react-native';
import React from 'react';
import { ICartItem } from 'src/shared/cartInterface';
import { styles } from './CheckoutCard.style';
import { Shadow } from 'react-native-shadow-2';
//@ts-ignore
import Multiplication from 'assets/icons/multiplication.svg';
import { colorStyles } from 'src/styles/colors';

export default function CheckoutCard({ item }: { item: ICartItem }) {
  return (
    <View style={{ padding: 10 }}>
      <Shadow>
        <View style={styles.itemContainer}>
          <Text style={[styles.text, styles.standardWidth]}>
            {item?.amount}
          </Text>
          <Multiplication
            width={24}
            height={24}
            fill={colorStyles.text}
            style={styles.standardWidth}
          />
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item?.product?.image }}
              style={styles.image}
            />
          </View>
          <Text style={[styles.text, styles.standardWidth]}>=</Text>
          <Text style={[styles.text, styles.priceWidth]}>
            {item?.product?.price * item?.amount}
          </Text>
        </View>
      </Shadow>
    </View>
  );
}
