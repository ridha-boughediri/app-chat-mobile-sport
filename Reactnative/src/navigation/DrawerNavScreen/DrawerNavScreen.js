import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator,TransitionPreset } from '@react-navigation/native-stack';




const Drawer = createDrawerNavigator();


export default function DrawerNavScreen(props) {
  return (
    <Drawer.Navigator
    screenOptions={{headerShown:false}}
    unnountinactiveRoutes={false}
    initialRouteName="HomeStack"
    drawerContent={(props) =>{
      return <CustomDrawerContent {...props} />
    }}
    drawerType ='slide'
    >
     
    </Drawer.Navigator>
  );
}
