import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = ({ placeholder, value, onChangeText, style, name, onBlur, onFocus, onSubmitEditing, onEndEditinggit }) => {
  return (
    <View style={style}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        name={name}

        onBlur={onBlur}
        onFocus={onFocus}
        onSubmitEditing={onSubmitEditing}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8
  },
});

export default Input;
