import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from 'expo-secure-store';
import jwt from 'jwt-decode';
import { request } from '../../../service/request';
import { SelectList } from 'react-native-dropdown-select-list';


const EditProfilScreen = () => {
  const [image, setImage] = useState(null);
  const [login, setLogin] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [sports, setSports] = useState('option1');
  const [teams, setTeams] = useState('');
  const [token, setToken] = useState('');
  const [data, setData] = useState([]);
  const [idsport,setIdsport]=useState('')

  useEffect(() => {
    const getInfo = async () => {
      const res = await SecureStore.getItemAsync('access_token');
      const decoded = jwt(res)
      request('users/' + decoded.id, 'get', '')
        .then(response => {
          setFirstname(response.data.firstname)
          setLastname(response.data.lastname)
          setEmail(response.data.email)
          setLogin(response.data.login)

        })
    }
    getInfo()
  }, []);
  useEffect(() => {
    request('sports/', 'get', '')
      .then(response => {
        const newArray = response.data.map((item) => {
          return { key: item.id, value: item.league_name }
        })
        setData(newArray)
      })


  }, [])
  //Pour modifier l'image depuis la gallerie user
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  //Pour modifier les infos user
  const updateUserInfos = async () => {
    try {
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
      if (!sports.trim()) {
        alert('choisissez un sport')
        return
      }
      if (!teams.trim()) {
        alert('choisissez une équipe favorite')
        return
      }
      let response = await axios.post('http://10.10.25.195:8888/', {
        email: email,
        password: password,
      });
      let data = response.data;
      console.log(data);

    } catch (error) {
      console.error(error);
    }
    const sportChose = () => {
        //comparaison de sports et de data pour recup l id sports
    }
    const teamChose=()=>{
      //meme chose qu au dessus mais pour les équipes
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/image/logo-black.png')}
          style={styles.profilPics} />

        <Text style={styles.icon} onPress={pickImage}>+</Text>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        <View style={styles.containerForm}>
          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Login
            </Text>
          </View>
          <TextInput
            style={styles.input}
            value={login}
            onChangeText={(text) => setLogin(text)} />

          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Prénom
            </Text>
          </View>
          <TextInput
            style={styles.input}
            value={firstname}
            onChangeText={(text) => setFirstname(text)} />

          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Nom
            </Text>
          </View>
          <TextInput
            style={styles.input}
            value={lastname}
            onChangeText={(text) => setLastname(text)} />

          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Email
            </Text>
          </View>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize='none'
            keyboardType='email-address' />

          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Mot de Passe
            </Text>
          </View>
          <TextInput
            style={styles.input}

            onChangeText={(text) => setPassword(text)}
            secureTextEntry={passwordVisibility} />

          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Confirmation
            </Text>
          </View>
          <TextInput
            style={styles.input}

            onChangeText={(text) => setPassword(text)}
            secureTextEntry={passwordVisibility} />

          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Sports
            </Text>
          </View>
          <SelectList
            onSelect={() => sportChose()}
            setSelected={(val) => setSports(val)}
            data={data}
            save="value"
            boxStyles={{ backgroundColor: 'white', padding: 100 }}
            dropdownItemStyles={{ backgroundColor: 'white' }}
          />
          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Equipes
            </Text>
          </View>
          <TextInput
            style={styles.input}

            onChangeText={(text) => setTeams(text)} />

          <TouchableOpacity style={styles.button} onPress={updateUserInfos}>
            <Text style={{ fontSize: 11, textAlign: 'center', fontWeight: 'bold' }}>Modifier</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#0d2371',
  },

  profilPics: {
    width: 150,
    height: 150,
    marginTop: 30,
    borderWidth: 5,
    borderColor: '#fbb034',
    borderRadius: 100,
  },

  containerForm: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },

  icon: {
    fontSize: 35,
    marginLeft: '20%',
    marginTop: '-10%',
    color: '#fbb034',
  },

  label: {
    color: 'black',
    backgroundColor: '#fbb034',
    padding: 5,
    borderWidth: 2,
    width: '75%',
    alignItems: 'center',
    borderColor: 'white',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
  },

  input: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    textAlign: 'center',
    color: 'white',
  },

  button: {
    width: '50%',
    padding: 20,
    backgroundColor: '#fbb034',
    marginBottom: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },

})

export default EditProfilScreen