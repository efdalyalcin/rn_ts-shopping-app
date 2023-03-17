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
import { ModalEnum } from 'src/shared/modalInterfaces';
import LoadingView from '../LoadingView/LoadingView';

const Account = () => {
  const { logout, login } = useAuth();
  const [user, setUser] = useState('');
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  const onLogin = () => {
    getAuthUser({ username: 'mor_2314', password: '83r5^_' }).then((res) =>
      setUser(res)
    );
  };

  console.log('user token ===> ', user);

  return (
    <>
      <Pressable
        onPress={() => {
          login('');
          setIsLoginVisible(true);
        }}
        style={{ height: 50, width: 150, backgroundColor: 'green' }}
      >
        <Text>Login</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          login('');
          setIsRegisterVisible(true);
        }}
        style={{ height: 50, width: 150, backgroundColor: 'blue' }}
      >
        <Text>Register</Text>
      </Pressable>
      <Pressable
        onPress={() => logout()}
        style={{ height: 50, width: 150, backgroundColor: 'red' }}
      >
        <Text>Logout</Text>
      </Pressable>
      <Pressable
        onPress={() => setIsLoading(true)}
        style={{ height: 50, width: 150, backgroundColor: 'purple' }}
      >
        <Text>loading</Text>
      </Pressable>
      <LoadingView isVisible={isLoading} loadingText={'Trying to login!!!'} />
      <LoginModal
        isModalVisible={isLoginVisible}
        setIsModalVisible={setIsLoginVisible}
        modalLabel={ModalEnum.signIn}
      />
      <LoginModal
        isModalVisible={isRegisterVisible}
        setIsModalVisible={setIsRegisterVisible}
        modalLabel={ModalEnum.register}
      />
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
