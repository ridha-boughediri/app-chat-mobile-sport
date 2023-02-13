import { View, Text,SafeAreaView } from 'react-native';
import React from 'react'
import axios from "axios";
import Layouts from '../../components/constants/Layout';



export default function GroupsScreen() {

  async function findAll(){
    const res = await axios.get(`http://10.10.57.98:8888/groupes/`);
    return res.data;
}




  
  


  return (


   <View style={{background:Layouts.darkBlue}}>


      <SafeAreaView >

          <View style={{ flexDirection: 'row', backgroundColor: Layouts.groupeColor}}>
                  <View style={{flex: 1, backgroundColor: Layouts.grey}}>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>Title</Text>
                  </View>
                  <View style={{flex: 2, alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Title</Text>
                    <Text style={{fontSize: 14, padding: 10}}>Text</Text>
                  </View>
          </View>
      </SafeAreaView>


   </View> 


  )



  
}



