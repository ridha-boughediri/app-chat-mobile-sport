import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native';

const CustomInput = ({ label, inconName, error, password ,placeholder,placeholderTextColor, value, onChangeText, style, name, onBlur, onFocus, onSubmitEditing }) => {
  return (
    <View style={style}>
      <Text>
        {label}
      </Text>
      <TextInput
      
        placeholder={placeholder}
        error={error}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        name={name}
        password={password}
        inconName={inconName}
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

export default CustomInput;


