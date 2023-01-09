import { View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import Logo from "../../../assets/image/Logo.png";
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButon/CustomButton';


export default function LoginScreen() {
    const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo,, {height: height * 0.10}]} resizeMode="contain" />
      <CustomInput />
      <CustomInput />

      <CustomButton />
    </View>
  )
}


const styles = StyleSheet.create({
    root: {
        AlignItems: 'center',
        padding:20,

    },
    logo: {
        widh:'80%',
        maxWidth: 400,
        maxHeight: 100,
        AlignItems: 'left',

    },
})