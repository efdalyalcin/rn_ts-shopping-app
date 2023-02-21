import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  Animated,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import React, { useCallback, useRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
  modalLabel: string;
};

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export default function LoginModal({
  isModalVisible,
  setIsModalVisible,
  modalLabel,
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
        validationSchema={SignupSchema}
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
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inputs}>
                  <Animated.View
                    style={[styles.animContainer, { opacity: fadeAnim }]}
                  >
                    <Text style={styles.label}>{modalLabel}</Text>
                  </Animated.View>
                  <View style={styles.inputs}>
                    <View style={styles.inputBlock}>
                      <AccountIcon
                        fill={colorStyles.text}
                        width={24}
                        height={24}
                      />
                      <TextInput
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        style={styles.textInput}
                        placeholder="username"
                      />
                    </View>
                    <View style={styles.inputBlock}>
                      <PasswordIcon
                        fill={colorStyles.text}
                        width={24}
                        height={24}
                      />
                      <TextInput
                        secureTextEntry
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        style={styles.textInput}
                        placeholder="password"
                      />
                    </View>
                    {/* @ts-ignore*/}
                    <Button onPress={(e) => handleSubmit(e)} title="Login" />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </View>
        )}
      </Formik>
    </Modal>
  );
}
