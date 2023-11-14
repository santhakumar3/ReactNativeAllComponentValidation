import React from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputValidation = () => {
  const [name, onChangeName] = React.useState('');
  const [phone, onChangePhone] = React.useState('');

  const onPressTheButton = () => {
    if (name === '') {
      Alert.alert('Please enter the user name');
    } else if (phone === '') {
      Alert.alert('Please enter the phone number');
    } else {
      Alert.alert('Login Success');
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="User Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePhone}
        value={phone}
        placeholder="Phone Number"
        keyboardType="phone"
      />
      <Button onPress={onPressTheButton} title="Save" color="#841584" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputValidation;
