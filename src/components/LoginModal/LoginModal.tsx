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
import React, { useCallback, useRef, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import bcrypt from 'react-native-bcrypt';
import { styles } from './LoginModal.style';
// @ts-ignore
import CloseIcon from 'assets/icons/close-circle-outline.svg';
// @ts-ignore
import AccountIcon from 'assets/icons/account_filled.svg';
// @ts-ignore
import PasswordIcon from 'assets/icons/password_filled.svg';
import { colorStyles } from 'src/styles/colors';
import { ILoginForm, ModalEnum } from 'src/shared/modalInterfaces';
import { getAuthUser } from 'src/services/getAuthUser';
import useAuth from 'src/store/auth';
import LoadingLottie from '../LoadingLottie/LoadingLottie';

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: (setter: boolean) => void;
  modalLabel: string;
};

//#region Schemas for Formik
const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  passwordCheck: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});
//#endregion

export default function LoginModal({
  isModalVisible,
  setIsModalVisible,
  modalLabel,
}: Props) {
  const { login, setLoginCredentials } = useAuth();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [hasTriedLogin, setHasTriedLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  //"johnd"
  //"m38rmF$"

  const submitForm = useCallback(
    (values: ILoginForm) => {
      if (modalLabel === ModalEnum.signIn) {
        setIsLoading(true);
        getAuthUser({
          username: values.username,
          password: values.password,
        })
          .then((res) => {
            setIsLoginSuccess(true);
            const hash = bcrypt.hashSync(values.password, 10);
            setLoginCredentials(values.username, hash);
            login(res);
            setIsLoading(false);
            setIsModalVisible(false);
          })
          .catch(() => {
            setIsLoginSuccess(false);
            setIsLoading(false);
          });
        setHasTriedLogin(true);
      } else {
      }
    },
    [modalLabel]
  );

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
      {/* <LoadingView isVisible={isLoading} loadingText={''} /> */}
      <Formik
        initialValues={{ username: '', password: '', passwordCheck: '' }}
        onSubmit={(values) => submitForm(values)}
        validationSchema={
          modalLabel === ModalEnum.signIn ? SignInSchema : SignUpSchema
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <Pressable
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
                    <Text
                      style={
                        touched.username && errors.username
                          ? { fontSize: 12, color: colorStyles.error }
                          : {
                              fontSize: 12,
                              color: colorStyles.error,
                              opacity: 0,
                            }
                      }
                    >
                      {errors.username}
                    </Text>
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
                    <Text
                      style={
                        touched.password && errors.password
                          ? { fontSize: 12, color: colorStyles.error }
                          : {
                              fontSize: 12,
                              color: colorStyles.error,
                              opacity: 0,
                            }
                      }
                    >
                      {errors.password}
                    </Text>
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
                    {modalLabel === ModalEnum.register ? (
                      <>
                        <Text
                          style={
                            touched.passwordCheck &&
                            errors.passwordCheck &&
                            !isLoading
                              ? { fontSize: 12, color: colorStyles.error }
                              : {
                                  fontSize: 12,
                                  color: colorStyles.error,
                                  opacity: 0,
                                }
                          }
                        >
                          {errors.passwordCheck}
                        </Text>
                        <View style={styles.inputBlock}>
                          <PasswordIcon
                            fill={colorStyles.text}
                            width={24}
                            height={24}
                          />
                          <TextInput
                            secureTextEntry
                            onChangeText={handleChange('passwordCheck')}
                            onBlur={handleBlur('passwordCheck')}
                            value={values.passwordCheck}
                            style={styles.textInput}
                            placeholder="Retype password"
                          />
                        </View>
                      </>
                    ) : null}
                    <Button
                      /* @ts-ignore*/
                      onPress={(e) => handleSubmit(e)}
                      title={modalLabel}
                    />
                    {hasTriedLogin && !isLoginSuccess ? (
                      <Text style={{ color: colorStyles.error }}>
                        Username or password is wrong!
                      </Text>
                    ) : null}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          </View>
        )}
      </Formik>

      {isLoading ? <LoadingLottie /> : null}
    </Modal>
  );
}
