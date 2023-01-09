import { View,TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function CustomInput() {
  return (
    <View >
      <TextInput
          style={styles.input}
          
          placeholder="email"
          keyboardType="email"
/>
    </View>
  )
}



const styles = StyleSheet.create({
input: {
height: 40,
margin: 12,
borderWidth: 1,
padding: 10,
},
});