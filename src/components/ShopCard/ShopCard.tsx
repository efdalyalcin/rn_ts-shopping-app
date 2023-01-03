import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './ShopCard.style';
import { Shadow } from 'react-native-shadow-2';
// @ts-ignore
import FavoriteIcon from 'assets/icons/favorite_filled.svg';
// @ts-ignore
import NotFavoriteIcon from 'assets/icons/favorite_outlined.svg';
import { Svg } from 'react-native-svg';
import { IProduct } from 'src/shared/productInterface';
import useFavoriteProducts from 'src/store/favoriteProducts';
import useCart from 'src/store/cart';
import { Button } from 'react-native-paper';

type Props = {
  title: string;
  description: string;
  pic: string;
  item: IProduct;
};

const ShopCard = ({ title, description, pic, item }: Props) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoriteProducts();

  const { cart, addToCart } = useCart();
  const inFavorites = favorites.find((favItem) => favItem?.id === item.id);

  console.log(cart);

  return (
    <View style={{ padding: 10 }}>
      <Shadow>
        <View style={[styles.card, styles.shadowProp]}>
          {inFavorites ? (
            <Pressable
              style={styles.favorite}
              onPress={() => removeFromFavorites(item)}
            >
              <FavoriteIcon width={24} height={24} fill={'red'} />
            </Pressable>
          ) : (
            <Pressable
              style={styles.favorite}
              onPress={() => addToFavorites(item)}
            >
              <NotFavoriteIcon width={24} height={24} fill={'red'} />
            </Pressable>
          )}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc} numberOfLines={3} ellipsizeMode="tail">
            {description}
          </Text>
          <Image style={styles.cardPic} source={{ uri: pic }} />
          <Button onPress={() => addToCart(item)}>Add to Cart</Button>
        </View>
      </Shadow>
    </View>
  );
};

export default ShopCard;
