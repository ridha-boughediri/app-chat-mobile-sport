import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/image/logo-app.png')}
        style={{ width: 250, height: 250, marginTop: 50}}
      />
      <Text style={styles.text}>
        Partagez votre passion des sports US avec vos amis et toute la communauté !
      </Text>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inscription')}>
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText2}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles =  {

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center', 
  },

  text: {
    width: '75%',
    fontSize: 20, 
    marginTop: 20, 
    marginStart: 10, 
    marginEnd: 10, 
    padding: 25,
    textAlign: 'center', 
    color: 'white',
    // fontFamily: 'Copperplate',
    borderWidth: 3,
    borderColor: '#fbb034',
    borderRadius: 30,
  },

  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

    button: {
    marginTop: 40, 
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 10
  },

  buttonText: {
    color: '#fbb034',
    fontWeight: 'bold',
    // fontFamily: 'Copperplate',
  },

  button2: {
    marginTop: 40, 
    padding: 15,
    backgroundColor: '#fbb034',
    borderRadius: 5,
    marginRight: 10
  },
  
  buttonText2: {
    color: '#fff',
    fontWeight: 'bold',
    // fontFamily: 'Copperplate',
  },
}
export default HomeScreen;
