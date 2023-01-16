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
import { URL_USER } from '../../service/config';


const InscriptionScreen = ({navigation}) => {

 
// const url = URL_USER


console.warn(URL_USER)
 
// preparation de la data en mode inscription

  const [values, setValues] = useState({
    email: "",
    password: "",
    lastname: "",
    firstname: "",
    login: ""
  })




// envoi de la data 

const onSubmit = async () => {
  try {
      if (!values?.email || !values?.lastname || !values?.firstname || !values?.login || !values?.password) {
          Alert.alert('All fields are required');
          return;
      }

      const response = await request({

          url: `${URL_USER}/register`,
          method: 'post',
          data: values,
          });
          console.log('response :>> ', response);
          } catch(error) {
          console.log('error :>> ', error);
          }
} 
// recuperation et demo de la data 
const onChange = (key, value) => {
  setValues(v => ({...v, [key]: value}))
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
           value={values.lastname}
           onChangeText={(v)=>onChange('lastname', v)}

           iconName="account-outline"
           placeholder="nom"
           

         />
        <Input
         
         value={values.lastname}
         onChangeText={(v)=>onChange('lastname', v)}

          iconName="account-outline"
          // label="prenom"
          placeholder="prenom"

        /> 
         <Input
          value={values.login}
          onChangeText={(v)=>onChange('login', v)}
          iconName="account-box-outline"
          // label="login"
          placeholder="login"
        
        />
          <Input
            iconName="email-outline"

            // label="Email"
            placeholder="Enter your email address"
            value={values.email}
           onChangeText={(v)=>onChange('email', v)}
         
          />
      
          <Input
          iconName="lock-outline"
     
          placeholder="votre mot de passe"
        
          isPassword={true}
          value={values.password}
          onChangeText={(v)=>onChange('password', v)}

            
          /> 


      

           <Button title="Inscription "
          // envoi de la donnée
          onChangeText={(e)=> (console.warn("lebutton",e))}
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