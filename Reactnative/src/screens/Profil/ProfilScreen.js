import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { assets } from '../../../react-native.config';
import { request } from '../../service/request';
import * as SecureStore from 'expo-secure-store';
import jwt from 'jwt-decode';

const ProfilScreen = ({ navigation }) => {
  const [first, setFirst] = useState('')
  const [username, setUsername] = useState('')
  const [last, setLast] = useState('')
  const [mail, setMail] = useState('')
  // const [sport, setSport] = useState('')
  // const [team, setTeam] = useState('')

  useEffect(() => {
    const getInfo = async () => {
      const res = await SecureStore.getItemAsync('access_token');
      const decoded = jwt(res)
      request('users/' + decoded.id, 'get', '')
        .then(response => {

          console.log(response.data)
          setFirst(response.data.firstname)
          setLast(response.data.lastname)
          setMail(response.data.email)
          setUsername(response.data.login)

        })
        .catch(err=>{
          
           alert(err.response.data.message)
           if(err.response.status==401){
            navigation.navigate('Login')
           }
      })
    }
    getInfo()
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/image/logo-black.png')}
          style={styles.profilPics} />
        <View style={styles.infos}>
          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Login
            </Text>
          </View>
          <Text style={styles.infosUser}>
          {username}        </Text>
          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Prénom
            </Text>
          </View>
          <Text style={styles.infosUser}>
            {first}        </Text>
          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Nom
            </Text>
          </View>
          <Text style={styles.infosUser}>
            {last}     </Text>
          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Email
            </Text>
          </View>
          <Text style={styles.infosUser}>
            {mail}         
          </Text>
          {/* <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Sport(s)
            </Text>
          </View>
          <Text style={styles.infosUser}>
            q          </Text>
          <View style={styles.label}>
            <Text style={{ fontSize: 30 }}>
              Equipes(s)
            </Text>
          </View>
          <Text style={styles.infosUser}>
            Chicago Bulls
          </Text> */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfil')}>
            <Text style={{ fontSize: 11, textAlign: 'center', fontWeight: 'bold' }}>Modifiez votre profil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>


  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
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

  infos: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 25,
    alignItems: 'center',
    width: '100%',
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

  infosUser: {
    fontSize: 25,
    color: 'white',
    marginBottom: 10,
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

export default ProfilScreen