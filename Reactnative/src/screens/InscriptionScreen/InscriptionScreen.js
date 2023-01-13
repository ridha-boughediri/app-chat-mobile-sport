import { View, Text,StyleSheet } from 'react-native'
// import React, { useState } from 'react'
import Input from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButon/CustomButton';
// import { createUser } from '../../service/UserApi';
// import { isAxiosError } from 'axios';

const InscriptionScreen = ({navigation}) => {

  // console.log("clemnet",createUser)

  // const [lastname,setLastname] = useState('');
  // const [firstname,setFirstname] = useState('');
  // const [email, setEmail] = useState('');
  // const [password,setPasseword] = useState('');
  // const [login,setLogin] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState('');

  // // verifier la connnexion 

  // const [isloadind,setIsloading] = useState(false);

  // // error
  // const [error,setError] = useState(false);

  // // cest une error

  // const [isError,setIsError] = useState(false);

  // // mon groupe error pour validation

  // const [errors, setErrors] = useState({
  //   errorlastname:false,
  //   errorfistname:false,
  //   errorpassword:false,
  //   errorpasswordReapeat:false
  // })


  // const checklastname = (lastname) =>{

  //     if(!lastname || lastname.length !=0){

  //     }

  // }




  return (
    <View>
      <Text style = {styles.baseText} >Créer  un compte</Text>
      <Text style = {styles.baseText2}>Connecter vous et parler avec vos amis !</Text>


     
<Input 
      
      label="email"
      // error="Input email"
      placeholder = "entrer votre adresse email"
      iconName = "email-outline"
      />

<Input 
      
      label="password"
      // error="mot de passe "
      placeholder = "entrer votre mot de passe"
      iconName = "lock-outline"
      password
      />
    

      <CustomButton title="Inscription " backgroundColor="#0E64D2"  />


    </View>
 
  )
}
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20, 
    marginStart: 10, 
    marginEnd: 10, 
    textAlign: 'center',
  },
  baseText2: {
    fontWeight: 'normal',
    fontSize: 15,
    marginTop: 10, 
    marginStart: 5, 
    marginEnd: 5, 
    textAlign: 'center',
  },

});
export default InscriptionScreen