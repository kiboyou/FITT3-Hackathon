import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import React from 'react';

const resto0 = { 
name:'Mon Véhicule: Camion B0025',
description: 'Thai • Comfort  • Evaluation • 🎫 4 ⭐ \n Distance parcourus: 291KM',
 }

export default function Landing() {
  return (
    <View>
      <RestoAbout 
       name={resto0.name} 
       description={resto0.description} />

    </View>
  );
}
 
const RestoAbout = (props)=>{

  return(

    <View style={{
        paddingHorizontal:1,
        borderRadius:8,
        marginTop:5,
        backgroundColor:'#527f55',
        marginHorizontal:4,
        paddingHorizontal:5,
        paddingVertical:5,

    }} >

<Image  source={
          require('./pics/box.jpg')
      } style={{
        width:'100%',
        height:180,
        borderRadius:8,
    }}   />
     
      <Text style={{
        fontSize:18,
        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
        color:'white',
      }} >{props.name}</Text>
      <Text style={{
        fontSize:13,
        fontWeight:'bold',
        color:'white',

      
      }} >{props.description}</Text>
    </View>

  )

}