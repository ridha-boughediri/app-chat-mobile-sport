import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Layouts from '../constants/Layout';
const Button = ({title, onPress}) => {


// console.warn("jesuis la ")

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: Layouts.blue,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {
        // console.warn("jesuis la aussi ")

}
      <Text style={{color: Layouts.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;


