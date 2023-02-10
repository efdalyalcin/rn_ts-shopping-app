import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Formik } from 'formik';

export default function LoginModal() {
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Pressable onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}
