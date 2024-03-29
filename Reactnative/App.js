import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import GroupsScreen from './src/screens/Groups/GroupsScreen';
import GeneralScreen from './src/screens/General/General';
import ProfilScreen from './src/screens/Profil/ProfilScreen';
import MessageScreen from './src/screens/Message/MessageScreen';
import AdminScreen from './src/screens/Admin/AdminScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import InscriptionScreen from './src/screens/InscriptionScreen/InscriptionScreen';
import EditProfilScreen from './src/screens/Profil/EditProfilScreen/EditProfilScreen';
import AnnuaireScreen from './src/screens/Annuaire/AnnuaireScreen';
// import AmiSreen from './src/screens/AmiSreen/AmiSreen';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} ></Drawer.Screen>
        <Drawer.Screen name='Groups' component={GroupsScreen} ></Drawer.Screen>
        <Drawer.Screen name='Amis' component={AnnuaireScreen} ></Drawer.Screen>
        <Drawer.Screen name='Profil' component={ProfilScreen} ></Drawer.Screen>
        <Drawer.Screen name='EditProfil' component={EditProfilScreen} ></Drawer.Screen>
        <Drawer.Screen name='Message' component={MessageScreen} ></Drawer.Screen>
        <Drawer.Screen name='Admin' component={AdminScreen} ></Drawer.Screen>
        <Drawer.Screen name='Login' component={LoginScreen} ></Drawer.Screen>
        <Drawer.Screen name='Inscription' component={InscriptionScreen} ></Drawer.Screen>
        <Drawer.Screen name='General' component={GeneralScreen} ></Drawer.Screen>
        {/* <Drawer.Screen name='AmiScreen' component={AmiScreen} ></Drawer.Screen> */}

      </Drawer.Navigator>
      
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={GroupsScreen} />
      </Tab.Navigator> */}

    </NavigationContainer>
    
  );
};


export default App;