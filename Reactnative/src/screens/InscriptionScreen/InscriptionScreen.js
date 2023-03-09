import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Layouts from '../../components/constants/Layout';
import Button from '../../components/CustomButon/CustomButton';
import Input from '../../components/CustomInput/CustomInput';
import { useState } from 'react';
import axios from 'axios';


const InscriptionScreen = ({ navigation }) => {



  // preparation de la data en mode inscription


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [login, setLogin] = useState('');


  // message alerte creation 

  const [alertos, setAlertos] = useState({ isOpen: false, type: '', message: '' })



  // envoi de la data 

  const onSubmit = async ({ navigation }) => {


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


    // envoi de la data vers le lien


    const call = await axios.post('http://10.10.2.70:8888/users/register', {
      email: email,
      password: password,
      lastname: lastname,
      firstname: firstname,
      login: login,
      role_id: 1
    })
      .then(response => {

        alert(response.data.message)
      }).catch(err => {
        alert(err.response.data.message)
      })
  }










  return (

    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.headTxt}>
            Créez  un compte
          </Text>

          <Text style={{ color: 'white', fontSize: 14 }}>
            Pour discuter de sports américains avec des passionés !
          </Text>

          <View style={styles.form}>

            <TextInput
              style={styles.input}
              value={lastname}
              onChangeText={(v) => setLastname(v)}
              iconName="account-outline"
              placeholder="Prénom"
              placeholderTextColor={'white'}
            />

            <TextInput
              style={styles.input}
              value={firstname}
              onChangeText={(v) => setFirstname(v)}
              iconName="account-outline"
              placeholder="Nom"
              placeholderTextColor={'white'}
            />

            <TextInput
              style={styles.input}
              value={login}
              onChangeText={(v) => setLogin(v)}
              iconName="account-box-outline"
              placeholder="Login"
              placeholderTextColor={'white'}
            />

            <TextInput
              style={styles.input}
              iconName="email-outline"
              placeholder="E-mail"
              placeholderTextColor={'white'}
              value={email}
              onChangeText={(v) => setEmail(v)}
            />

            <TextInput
              style={styles.input}
              iconName="lock-outline"
              placeholder="Mot de passe"
              placeholderTextColor={'white'}
              isPassword={true}
              value={password}
              onChangeText={(v) => setPassword(v)}
            />

            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text style={{ fontSize: 11, textAlign: 'center', fontWeight: 'bold' }}>
                Inscription
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footTxt}>
            <Text style={{ color: 'white' }}>Vous avez déjà un compte ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: '#fbb034' }}>Connectez-vous !</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },

  headTxt: {
    color: 'white',
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    // fontFamily: 'Copperplate',
  },

  form: {
    width: '100%',
    marginTop: 20,
  },

  input: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#fbb034',
    borderRadius: 15,
    textAlign: 'center',
    color: 'white',
  },

  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fbb034',
    marginBottom: 50,
    marginTop: 50,
    borderWidth: 2,
    borderRadius: 10,
  },

  footTxt: {
    flexDirection: 'row',
  },
})

export default InscriptionScreen;