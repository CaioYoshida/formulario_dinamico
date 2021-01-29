import React from 'react';
import { View, Text } from 'react-native';
import Form from './components/Form';

const fields = ['PHONE', 'EMAIL', 'TAXID'];

function App() {
  return (
    <View className="App">
      <Text>Form</Text>
      <Form fields={fields} />
    </View>
  );
}

export default App;
