import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Input } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';


const InscriptionScreen = ({ navigation }) => {



  return (
    <View style={styles.container}>
     <Text style={{ fontSize: 18, marginTop: 10, marginStart: 10, marginEnd: 10, textAlign: 'center'}}>
     Créer  un compte
     
      </Text>


      {/* <CustomInput /> */}

      <Text style={{ fontSize: 10, marginTop: 5, marginStart: 10, marginEnd: 20, textAlign: 'center'}}>
      Connecter vous et parler avec vos amis !
      </Text>
    
     <TextInput
        style={styles.input}
        // value={lastname}
        // onChangeText={(text) => setEmail(text)}
        placeholder='nom'
        autoCapitalize='none'
      />
       <TextInput
        style={styles.input}
        // value={firstname}
        // onChangeText={(text) => setEmail(text)}
        placeholder='prenom'
        autoCapitalize='none'
      />
       <TextInput
        style={styles.input}
        // value={email}
        // onChangeText={(text) => setEmail(text)}
        placeholder='Email'
        autoCapitalize='none'
        keyboardType='email-address'
      />
       <TextInput
        style={styles.input}
        // value={email}
        // onChangeText={(text) => setEmail(text)}
        placeholder='Mot de passe '
        autoCapitalize='none'
      />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Inscription</Text>
      </TouchableOpacity>
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  button: {
    backgroundColor: '#0E64D2',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  linksContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '100%'
  },
  link: {
    alignItems: 'center'
  },
  linkText: {
    color: '#1E90FF'
  }
});
export default InscriptionScreen;
