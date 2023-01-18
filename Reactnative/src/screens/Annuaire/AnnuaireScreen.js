import React from 'react'
import { View,  Image, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../../components/CustomButon/CustomButton';
import Input from '../../components/CustomInput/CustomInput';

export default function AnnuaireScreen() {

  return (
      <View style={{ flex: 1, backgroundColor: "#AE0F0F"}}>
        <Image 
          style={styles.image}
        source={require('../../../assets/image/logo-black.png')} />
        <Input 
        
        label="Nom"
        value="aurelien"
         />
        <Input 
        
        label="Prenom"
        value="ADjami"
        placeholder="Adresse email" />
        <Input placeholder="Numéro de téléphone" />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1 }}>
            <Button title="Messages" />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }}>
          <Button title="Supprimer" />
          </TouchableOpacity>
        </View>
      </View>
    )
  
}


const styles = StyleSheet.create({
  container: {
   backgroundColor: "#AE0F0F",
   width: 100,
   height: 100,

  },
  image: {

    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20
   
  }
});