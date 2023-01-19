import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { assets } from '../../../react-native.config';

const ProfilScreen = ({navigation}) => {


  return (
    <ScrollView>
    <View style={styles.container}>
      <Image 
      source={require('../../../assets/image/logo-black.png')}
      style={styles.profilPics}/>
        <View style={styles.infos}>
          <View style={styles.label}>
          <Text style={{fontSize: 30}}>
            Login
          </Text>
          </View>
          <Text style={styles.infosUser}>
            Aurélus
          </Text>
          <View style={styles.label}>
          <Text style={{fontSize: 30}}>
            Prénom
          </Text>
          </View>
          <Text style={styles.infosUser}>
            Aurélien
          </Text>
          <View style={styles.label}>
          <Text style={{fontSize: 30}}>
            Nom
          </Text>
          </View>
          <Text style={styles.infosUser}>
            Adjimi
          </Text>
          <View style={styles.label}>
          <Text style={{fontSize: 30}}>
            Email
          </Text>
          </View>
          <Text style={styles.infosUser}>
            aurelien.adjimi@coucou.fr
          </Text>
          <View style={styles.label}>
          <Text style={{fontSize: 30}}>
            Sport favori
          </Text>
          </View>
          <Text style={styles.infosUser}>
            Basketball
          </Text>
          <View style={styles.label}>
          <Text style={{fontSize: 30}}>
            Equipe favorite
          </Text>
          </View>
          <Text style={styles.infosUser}>
           Chicago Bulls
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfilScreen')}>
            <Text>Modifiez votre profil</Text>
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
    fontFamily: 'Cochin',
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