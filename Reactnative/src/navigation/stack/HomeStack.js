import { View, Text, Image, StyleSheet, TouchabaleOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native';
import Home from '../../screens/Home/Home';

const stack = createNativeStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screem name={'Home'}
      componenet={Home}
      options={{}} />
    </Stack.Navigator>
  )
}