import React from 'react';
import {View, TextInput} from 'react-native';

const FormikInput = ({handlechange, handleBlur, value, placeholder}) => (
  <View>
    <TextInput
      onChangeText={handlechange}
      onBlur={handleBlur}
      value={value}
      placeholder={placeholder}
    />
  </View>
);

export default FormikInput;
