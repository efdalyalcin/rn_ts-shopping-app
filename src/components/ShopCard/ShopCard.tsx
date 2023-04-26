import { View, Text, Image, Pressable, Modal } from 'react-native';
import React, { useCallback, useState } from 'react';
import { styles } from './ShopCard.style';
import { Shadow } from 'react-native-shadow-2';
// @ts-ignore
import FavoriteIcon from 'assets/icons/favorite_filled.svg';
// @ts-ignore
import NotFavoriteIcon from 'assets/icons/favorite_outlined.svg';
import { IProduct } from 'src/shared/productInterface';
import useFavoriteProducts from 'src/store/favoriteProductsStore';
import CardButton from '../CardButton/CardButton';
import { colorStyles } from 'src/styles/colors';
import GestureRecognizer from 'react-native-swipe-gestures';
import { StatusBar } from 'expo-status-bar';

type Props = {
  title: string;
  description: string;
  pic: string;
  item: IProduct;
};

const ShopCard = ({ title, description, pic, item }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoriteProducts();

  const inFavorites = favorites.find((favItem) => favItem?.id === item.id);
  const handlePress = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <Shadow>
        <View style={[styles.card, styles.shadowProp]}>
          {inFavorites ? (
            <Pressable
              style={styles.favorite}
              onPress={() => removeFromFavorites(item)}
            >
              <FavoriteIcon
                width={24}
                height={24}
                fill={colorStyles.favorites}
              />
            </Pressable>
          ) : (
            <Pressable
              style={styles.favorite}
              onPress={() => addToFavorites(item)}
            >
              <NotFavoriteIcon
                width={24}
                height={24}
                fill={colorStyles.favorites}
              />
            </Pressable>
          )}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc} numberOfLines={3} ellipsizeMode="tail">
            {description}
          </Text>
          <Pressable onPress={handlePress}>
            <Image style={styles.cardPic} source={{ uri: pic }} />
          </Pressable>
          <GestureRecognizer
            onSwipeDown={() => setIsModalOpen(false)}
            onSwipeUp={() => setIsModalOpen(false)}
          >
            <StatusBar />
            <Modal
              visible={isModalOpen}
              transparent={false}
              animationType="fade"
            >
              <Image
                style={[styles.modalPic, styles.modalView]}
                source={{ uri: pic }}
              />
            </Modal>
          </GestureRecognizer>
          <Text style={styles.price}>
            {item.price}
            {' $'}
          </Text>
          <CardButton item={item} buttonHeight={36} />
        </View>
      </Shadow>
    </View>
  );
};

export default ShopCard;
