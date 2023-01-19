import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Layouts from '../../components/constants/Layout';
import Button from '../../components/CustomButon/CustomButton';
import Input from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import axios from 'axios';


const InscriptionScreen = ({navigation}) => {


 
// preparation de la data en mode inscription


const [email,setEmail] = useState('');
const [password, setPassword] = useState('');
const [lastname,setLastname] = useState('');
const [firstname,setFirstname] = useState('');
const [login, setLogin] = useState('');


// message alerte creation 

const [alertos, setAlertos] = useState({ isOpen: false, type: '', message: '' })



// envoi de la data 

const onSubmit = async() => {


// verification des inputes 
if (!lastname.trim()) {
    alert('Rentrer votre nom');
    return;
  }

if (!firstname.trim()) {
  alert('Rentrer votre prenom ');
  return;
}
if (!login.trim()) {
  alert('Rentrer votre login ');
  return;
}  
if (!email.trim()) {
  alert('Enter Email');
  return;
}
if (!password.trim()) {
  alert('Rentrer votre mot de passe ');
  return;
}
//  SI tout est bien rempli
  alert('Success vous rempli tous les champs ');
  
// envoi de la data vers le lien

console.warn(email)

try {
  const response = await axios.post('http://192.168.1.79:8888/users/register', {
    email: email,
    password: password,
    lastname: lastname,
    firstname: firstname,
    login: login
  });
  // const data = response.data;
  console.log(response.status);
  return response.json({ message: 'User Created'}), res.status(200);
} catch (error) {
  console.log(error.message);
}

} 





  

  return (
    
    <SafeAreaView style={{backgroundColor: Layouts.white, flex: 1}}>
      <ScrollView
        contentContainerStyle={{paddingTop: 5, paddingHorizontal: 10}}>
        <Text style={{color: Layouts.black, fontSize: 24, fontWeight: 'bold'}}>
        Créer  un compte
        </Text>
        <Text style={{color: Layouts.black, fontSize: 14, marginVertical: 10}}>
        Connecter vous et parler avec vos amis !</Text>
        <View style={{marginVertical: 5}}>


        <Input
           value={lastname}
           onChangeText={(v)=>setLastname(v)}

           iconName="account-outline"
           placeholder="nom"
           

         />

        <Input
         
         value={firstname}
         onChangeText={(v)=>setFirstname(v)}

          iconName="account-outline"
          // label="prenom"
          placeholder="prenom"

        /> 
         <Input
          value={login}
          onChangeText={(v)=>setLogin( v)}
          iconName="account-box-outline"
          // label="login"
          placeholder="login"
        
        />
          <Input
            iconName="email-outline"

            // label="Email"
            placeholder="Enter your email address"
            value={email}
           onChangeText={(v)=>setEmail(v)}
         
          />
      
          <Input
          iconName="lock-outline"
     
          placeholder="votre mot de passe"
        
          isPassword={true}
          value={password}
          onChangeText={(v)=>setPassword(v)}

            
          /> 

      <Button title="Inscription "
    // envoi de la donnée
    onPress={onSubmit} 
    />  


        <TouchableOpacity  >
          <Text >J 'ai deja une compote</Text>
          <Text >Connexion</Text>

        </TouchableOpacity>
       

  
      
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InscriptionScreen;