import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../../../assets/image/US_Sports_Insights-removebg-preview.png')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Le Premier tchat pour discuter Pronostique et suivi de ses equipe  de sport americain favorites
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Inscription button pressed')}>
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Connexion button pressed')}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles =  {
    button: {
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginRight: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}
export default HomeScreen;
