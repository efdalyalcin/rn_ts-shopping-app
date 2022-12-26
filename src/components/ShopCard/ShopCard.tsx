import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './ShopCard.style';

type Props = {
  title: string;
  description: string;
  pic: string;
};

const ShopCard = ({ title, description, pic }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.shadowProp]}>
        <Pressable style={styles.favorite}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc} numberOfLines={3} ellipsizeMode="tail">
          {description}
        </Text>
        <Image style={styles.cardPic} source={{ uri: pic }} />
      </View>
    </View>
  );
};

export default ShopCard;
