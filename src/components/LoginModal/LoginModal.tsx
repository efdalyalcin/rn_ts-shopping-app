import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  Alert,
  Animated,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';
import { styles } from './LoginModal.style';
// @ts-ignore
import CloseIcon from 'assets/icons/close-circle-outline.svg';
// @ts-ignore
import AccountIcon from 'assets/icons/account_filled.svg';
// @ts-ignore
import PasswordIcon from 'assets/icons/password_filled.svg';
import { colorStyles } from 'src/styles/colors';

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: (setter: boolean) => void;
};

export default function LoginModal({
  isModalVisible,
  setIsModalVisible,
}: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      delay: 500,
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const fadeing = setTimeout(() => {
      fadeIn();
    }, 300);
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setIsModalVisible(!isModalVisible);
      }}
    >
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <Pressable
              // icon="close-circle-outline"
              onPress={() => {
                setIsModalVisible(false);
                fadeOut();
              }}
              style={styles.closeButton}
            >
              <CloseIcon width={24} height={24} fill={colorStyles.main} />
            </Pressable>
            <Animated.View style={[{ opacity: fadeAnim }]}>
              <Text>Log In</Text>
            </Animated.View>
            <View style={styles.inputs}>
              <View style={styles.inputBlock}>
                <AccountIcon fill={colorStyles.text} width={24} height={24} />
                <TextInput
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  style={styles.textInput}
                  placeholder="username"
                />
              </View>
              <View style={styles.inputBlock}>
                <PasswordIcon fill={colorStyles.text} width={24} height={24} />
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={styles.textInput}
                  placeholder="password"
                />
              </View>
              {/* <Pressable onPress={handleSubmit} title="Submit" /> */}
            </View>
          </View>
        )}
      </Formik>
    </Modal>
  );
}
