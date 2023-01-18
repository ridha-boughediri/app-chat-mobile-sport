import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { root } from 'postcss';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [rightIcon, setRightIcon] = useState('eye');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const handleLogin = async () => {
    try {
      let response = await axios.post('http://localhost:8888/auth/login', {
        email: email,
        password: password
      });

      let data = response.data;
      console.log(data.access_token);
      await AsyncStorage.setItem('access_token', data.access_token);
      navigation.navigate("GroupsScreen")
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getInfo = async () => {
      const res = await AsyncStorage.getItem('access_token');
      setToken(res);
    };
    getInfo();
  }, []);


  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/image/US_Sports_Insights-removebg-preview.png')}
        style={{ width: 300, height: 300 }}
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='Email'
        autoCapitalize='none'
        keyboardType='email-address'
      />
      <View
        style={styles.input}>
        <TextInput
          style={styles.pass}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder='Mot de passe'
          secureTextEntry={passwordVisibility}
        />
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('InscriptionScreen')}>
          <Text style={styles.linkText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => console.log('Mot de passe oublié')}>
          <Text style={styles.linkText}>Mot de passe oublié</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
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
  },
  pass:{
    width: '90%'
  }
});
export default LoginScreen;
