import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
// @ts-ignore
import ShopIcon from 'assets/icons/shopping_cart.png';
import Store from 'src/pages/Store/Store';
import Favorites from 'src/pages/Favorites/Favorites';
import Cart from 'src/pages/Cart/Cart';
import Account from '../Account/Account';
import useBottomNavIndex from 'src/store/bottomNavIndexStore';

const BottomNav = () => {
  const { index, setIndex } = useBottomNavIndex();
  const [routes] = useState([
    {
      key: 'store',
      title: 'Store',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'favorites',
      title: 'Favorites',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {
      key: 'cart',
      title: 'Cart',
      focusedIcon: ShopIcon,
    },
    { key: 'account', title: 'Account', focusedIcon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    store: Store,
    favorites: Favorites,
    cart: Cart,
    account: Account,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;
