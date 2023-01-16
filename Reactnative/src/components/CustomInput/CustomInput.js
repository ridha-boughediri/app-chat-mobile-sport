import { StyleSheet, View, TextInput,Text, Pressable, Image } from "react-native";
import Layouts from '../constants/Layout';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const  Input = ({label,placeholder,
  iconName,
  isPassword,
  onChangeText,
  value}) => {

 // afficher le mot de passe


 const [isPasswordvisible,setIsPasswordvisible] = useState(false);


 const afficherLepass= () =>{
    setIsPasswordvisible(!isPasswordvisible)
 }




  return (
    <View style={[  style.inputContainer,{alignItems: 'center', },]} >
      <Text style={style.label}>{label}</Text>
      <View >
      <Icon name={iconName} style={{fontSize:22, color: Layouts.darkBlue, marginRight: 10}}/>
       
         <TextInput
         secureTextEntry={isPassword && !isPasswordvisible}
         placeholder={placeholder}
         onChangeText={onChangeText}
         value={value}
       />
        {/* ternair pr afficher le mot de passe que dans l input password */}
        {isPassword ?( <Pressable onPress={afficherLepass}>
            <Image source={require('../../../assets/icon/eye.png')} />
         </Pressable>):null
         }

       

      

          
      
         </View> 
          
       
    </View>
  );
};



// style={[
//   style.inputContainer,
//   {

//     alignItems: 'center',
//   },
// ]}>
// {/* <Icon
//   name={iconName}
//   style={{color: Layouts.darkBlue, fontSize: 22, marginRight: 10}}
// /> */}
const style = StyleSheet.create({
  label: {
    marginVertical: 3,
    fontSize: 14,
    color: Layouts.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: Layouts.light,
    flexDirection: 'row',
    paddingHorizontal: 30,
    borderWidth: 0.5,
  },
});

export default Input;