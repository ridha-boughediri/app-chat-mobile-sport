import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InscriptionScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Do something with the email and password, such as sending a request to a server to create a new account
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
  },
});

export default InscriptionScreen;
