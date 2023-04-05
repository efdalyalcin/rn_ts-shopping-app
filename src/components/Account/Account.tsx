import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import useAuth from 'src/store/auth';
import LoginModal from '../LoginModal/LoginModal';
import { ModalEnum } from 'src/shared/modalInterfaces';
import { styles } from './Account.style';

export default function Account() {
  const { isUserLoggedIn, login, logout } = useAuth();

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const handleLogin = () => {
    setIsLoginVisible(true);
  };
  const handleLogout = () => {
    logout();
  };
  const handleRegister = () => {
    setIsRegisterVisible(true);
  };

  return (
    <View style={styles.container}>
      {isUserLoggedIn ? (
        <TouchableOpacity
          style={[styles.buttons, styles.logout]}
          onPress={() => handleLogout()}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttons} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.buttons} onPress={() => handleRegister()}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

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
    </View>
  );
}
