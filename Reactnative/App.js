import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <LoginScreen />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;