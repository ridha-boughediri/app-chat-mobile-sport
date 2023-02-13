import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';

const EditProfilScreen = () => {
  const [image, setImage] = useState(null);
  const [login, setLogin] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [sports, setSports] = useState('');
  const [teams, setTeams] = useState('');
  const [token, setToken] = useState('');


  //Pour modifier l'image depuis la gallerie user
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  //Pour modifier les infos user
  const updateUserInfos = async () => {
    try {
      let response = await axios.post('http://10.10.57.98:8888/', {
        email: email,
        password: password,
      });
      let data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
            <Image 
      source={require('../../../../assets/image/logo-black.png')}
      style={styles.profilPics}/>

      <Text style={styles.icon} onPress={pickImage}>+</Text>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      <View style={styles.containerForm}>
        <View style={styles.label}>
        <Text style={{fontSize: 30, fontFamily: 'Chalkduster'}}>
            Login
          </Text>
        </View>
      <TextInput
          style={styles.input}
          value={'Aurélus'}
          onChangeText={(text) => setLogin(text)}/>

<View style={styles.label}>
        <Text style={{fontSize: 30, fontFamily: 'Chalkduster'}}>
            Prénom
          </Text>
        </View>
      <TextInput
          style={styles.input}
          value={'Aurélien'}
          onChangeText={(text) => setFirstname(text)}/>

<View style={styles.label}>
        <Text style={{fontSize: 30, fontFamily: 'Chalkduster'}}>
            Nom
          </Text>
        </View>
      <TextInput
          style={styles.input}
          value={'Adjimi'}
          onChangeText={(text) => setLastname(text)}/>

<View style={styles.label}>
        <Text style={{fontSize: 30, fontFamily: 'Chalkduster'}}>
            Email
          </Text>
        </View>
      <TextInput
          style={styles.input}
          value={'aurelien.adjimi@coucou.fr'}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize='none'
          keyboardType='email-address'/>

<View style={styles.label}>
        <Text style={{fontSize: 30, fontFamily: 'Chalkduster'}}>
            Mot de Passe
          </Text>
        </View>
      <TextInput
          style={styles.input}
          value={'crotte de chameau'}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={passwordVisibility}/>

<View style={styles.label}>
        <Text style={{fontSize: 30, fontFamily: 'Chalkduster'}}>
            Confirmation
          </Text>
        </View>
      <TextInput
          style={styles.input}
          value={'crotte de chameau'}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={passwordVisibility}/>

<View style={styles.label}>
        <Text style={{fontSize: 30, fontFamily: 'Chalkduster'}}>
            Sports
          </Text>
        </View>
      <TextInput
          style={styles.input}
          value={'Basketball, Hockey'}
          onChangeText={(text) => setSports(text)}/>

<View style={styles.label}>
        <Text style={{fontSize: 30, fontFamily: 'Chalkduster'}}>
            Equipes
          </Text>
        </View>
      <TextInput
          style={styles.input}
          value={'Chicago Bulls, Pittsburgh Penguins'}
          onChangeText={(text) => setTeams(text)}/>

<TouchableOpacity style={styles.button} onPress={updateUserInfos}>
        <Text style={{fontFamily: 'Chalkduster', fontSize: 11, textAlign: 'center', fontWeight: 'bold'}}>Modifier</Text>
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