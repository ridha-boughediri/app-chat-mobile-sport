import { StyleSheet, View, TextInput,Text } from "react-native";
import COLORS from '../constants/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from "react";
const  Input = ({
  label,
  iconName,
  error,
  password,
  placeholder,
  onChangeText,
  value,
  onFocus =() =>{},
  ...props
}) =>{

const [isFocused,setIsFocused] = useState(false);
const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{marginBottom: 5}}>
      <Text>{label}</Text>
      
      <View style= {[styles.inputContainer,{borderColor: error?COLORS.red:isFocused ?COLORS.darkBlue:COLORS.lightlight}]}>
        <Icon name={iconName} style={{fontSize:22, color: COLORS.darkBlue, marginRight: 10}}/>
        <TextInput
        secureTextEntry={hidePassword}
        autoCorrect={false}
        onFocus={()=>{
          onFocus();
          setIsFocused(true);
        }}

        onBlur={() =>{
          setIsFocused(false);

        }}



        style={{color: COLORS.darkBlue, flex:1}}
        {...props} />

      </View>

      {error && (
        <Text style={{color:COLORS.red,fontSize: 15, marginTop: 7}}>{error}</Text>
      
      ) }

      
    </View>
  );
}
const styles = StyleSheet.create({


  inputContainer: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height:55 ,
    backgroundColor:COLORS.light,
    flexDirection: 'row',
    paddingHorizontal : 15 ,
    borderWidth: 0.5,
    alignItems: 'center',

  },

  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },


});

export default Input;