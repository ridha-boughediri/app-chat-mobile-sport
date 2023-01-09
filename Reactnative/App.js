import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/LoginScreen/LoginScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>{/* ... */}
       
    <SafeAreaView style={styles.root}>
      <LoginScreen />
      
    </SafeAreaView>
    
     
     </Stack.Navigator>
  
    </NavigationContainer>

    
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;