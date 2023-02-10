import React, { useEffect, useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
// @ts-ignore
import ShopIcon from 'assets/icons/shopping_cart.png';
import Store from 'src/pages/Store/Store';
import Favorites from 'src/pages/Favorites/Favorites';
import Cart from 'src/pages/Cart/Cart';
import { Pressable, View } from 'react-native';
import useAuth from 'src/store/auth';
import { getAuthUser } from 'src/services/getAuthUser';
import LoginModal from '../LoginModal/LoginModal';

const RecentsRoute = () => <Text>Recents</Text>;

const Account = () => {
  const { logout, login } = useAuth();
  const [user, setUser] = useState('');

  useEffect(() => {
    getAuthUser({ username: 'mor_2314', password: '83r5^_' }).then((res) =>
      setUser(res)
    );
  }, []);

  console.log(user);

  return (
    <>
      <Pressable
        onPress={() => login('')}
        style={{ height: 50, width: 150, backgroundColor: 'green' }}
      >
        <Text>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => logout()}
        style={{ height: 50, width: 150, backgroundColor: 'red' }}
      >
        <Text>Logout</Text>
      </Pressable>
      <LoginModal />
    </>
  );
};

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
