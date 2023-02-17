import {
  View,
  Text,
  TextInput,
  Pressable,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { styles } from './LoginModal.style';
import { Button } from 'react-native-paper';
// @ts-ignore
import CloseIcon from 'assets/icons/close-circle-outline.svg';
import { colorStyles } from 'src/styles/colors';

const height = Dimensions.get('screen').height;

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: (setter: boolean) => void;
};

export default function LoginModal({
  isModalVisible,
  setIsModalVisible,
}: Props) {
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
        initialValues={{ email: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View
            style={{
              marginTop: 64,
              height: height - 64,
              width: '100%',
              backgroundColor: 'orange',
            }}
          >
            <Pressable
              // icon="close-circle-outline"
              onPress={() => setIsModalVisible(false)}
              style={styles.closeButton}
            >
              <CloseIcon width={48} height={48} fill={colorStyles.primary} />
            </Pressable>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.email}
              placeholder="email@email.com"
            />
            {/* <Pressable onPress={handleSubmit} title="Submit" /> */}
          </View>
        )}
      </Formik>
    </Modal>
  );
}
