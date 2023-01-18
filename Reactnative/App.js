import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import GroupsScreen from './src/screens/Groups/GroupsScreen';
import ProfilScreen from './src/screens/Profil/ProfilScreen';
import MessageScreen from './src/screens/Message/MessageScreen';
import AdminScreen from './src/screens/Admin/AdminScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import InscriptionScreen from './src/screens/InscriptionScreen/InscriptionScreen';
import EditProfilScreen from './src/screens/Profil/EditProfilScreen/EditProfilScreen';
// import AmiSreen from './src/screens/AmiSreen/AmiSreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} ></Drawer.Screen>
        <Drawer.Screen name='GroupsScreen' component={GroupsScreen} ></Drawer.Screen>
        <Drawer.Screen name='ProfilScreen' component={ProfilScreen} ></Drawer.Screen>
        <Drawer.Screen name='EditProfilScreen' component={EditProfilScreen} ></Drawer.Screen>
        <Drawer.Screen name='MessageScreen' component={MessageScreen} ></Drawer.Screen>
        <Drawer.Screen name='AdminScreen' component={AdminScreen} ></Drawer.Screen>
        <Drawer.Screen name='LoginScreen' component={LoginScreen} ></Drawer.Screen>
        <Drawer.Screen name='InscriptionScreen' component={InscriptionScreen} ></Drawer.Screen>
        {/* <Drawer.Screen name='AmiScreen' component={AmiScreen} ></Drawer.Screen> */}

      </Drawer.Navigator>
      

    </NavigationContainer>
    
  );
};


export default App;