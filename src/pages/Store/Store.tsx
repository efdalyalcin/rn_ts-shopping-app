import { View, Text, FlatList, Dimensions, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import useFavoriteProducts from 'src/store/favoriteProductsStore';
import { Button, Card, Paragraph } from 'react-native-paper';
import { getProducts } from 'src/services/getProducts';
import { styles } from './Store.style';
import { HeaderStyle } from 'src/styles/header';
// @ts-ignore
import favoritesIcon from 'assets/icons/favorite_border.png';
import ShopCard from 'src/components/ShopCard/ShopCard';
import { getUserCart } from 'src/services/getUserCart';
import { IUser } from 'src/shared/userInterface';
import { getAllUsers, getUserById } from 'src/services/getUsers';

const height = Dimensions.get('screen').height - HeaderStyle.headerSize - 80;

export default function Store() {
  const [shopList, setShopList] = useState<any>();
  const [users, setUsers] = useState<IUser[]>([]);
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoriteProducts();

  useEffect(() => {
    getProducts().then((res) => setShopList(res));
    getUserById(1).then((res) => setUsers([res]));
  }, []);

  console.log('all users ====> ', users);

  const renderItem = ({ item, index }) => {
    return (
      <ShopCard
        title={item.title}
        description={item.description}
        pic={item.image}
        item={item}
      />
    );
  };

  return (
    <View style={(styles.container, { height: height })}>
      <FlatList
        renderItem={renderItem}
        data={shopList}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
