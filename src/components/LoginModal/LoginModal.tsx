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
              style={{ display: 'flex', alignItems: 'flex-end' }}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={{ padding: 20 }}>X</Text>
            </Pressable>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={{ backgroundColor: 'green' }}
              placeholder="email@email.com"
            />
            {/* <Pressable onPress={handleSubmit} title="Submit" /> */}
          </View>
        )}
      </Formik>
    </Modal>
  );
}
