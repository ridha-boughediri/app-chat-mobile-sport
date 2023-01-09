import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SplashScreen() {
    const navigation =useNavigation();
    useEffect(() => {
        setTimeout(() =>{
            navigation.navigate('DrawerNavScreen')
        }, 3000);
    }, []);


  return (
    <View
    style={{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    }}
    >
      <Text>SplashScreen drawer</Text>
    </View>
  )
}