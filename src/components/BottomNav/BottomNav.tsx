import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
// @ts-ignore
import ShopIcon from 'assets/icons/shopping_cart.png';
import Home from 'src/pages/Home/Home';
import Store from 'src/pages/Store/Store';

const StoreRoute = () => <Text>Store</Text>;

const FavoritesRoute = () => <Text>Favorites</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const CartRoute = () => <Text>Cart</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
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
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    {
      key: 'cart',
      title: 'Cart',
      focusedIcon: ShopIcon,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    store: Store,
    favorites: FavoritesRoute,
    recents: RecentsRoute,
    cart: CartRoute,
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
