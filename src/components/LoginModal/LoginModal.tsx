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

export default function LoginModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
              height: height - 40,
              width: 200,
              backgroundColor: 'orange',
            }}
          >
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
