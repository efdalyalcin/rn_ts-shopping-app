import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  Animated,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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

//#region KeyboardAvoid
/*
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>;
*/
//#endregion
export default function LoginModal({
  isModalVisible,
  setIsModalVisible,
}: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  const fadeOut = () => {
    fadeAnim.setValue(0);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}
      onShow={fadeIn}
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
            <Animated.View
              style={[styles.animContainer, { opacity: fadeAnim }]}
            >
              <Text style={styles.label}>Log In</Text>
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
