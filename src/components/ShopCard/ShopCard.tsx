import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './ShopCard.style';

type Props = {
  title: string;
  description: string;
  pic: string;
};

const ShopCard = ({ title, description, pic }: Props) => {
  console.log('image source ==> ', pic);
  return (
    <View style={{ marginTop: 20 }}>
      <Pressable style={{ backgroundColor: 'red', height: 20 }}>
        <Image source={{ uri: pic }} />
      </Pressable>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Image source={{ uri: pic }} />
    </View>
  );
};

export default ShopCard;
