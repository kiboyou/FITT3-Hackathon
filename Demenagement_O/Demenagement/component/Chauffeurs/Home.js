import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, } from 'react-native'
import React from 'react'
import Landing from './Landing'


export default function Home() {
  return (
    <View style={styles.container} >

        <Box />

<Landing />

        <Opt/>
        <Opt0/>
        <Opt1/>

    </View>
  )
}

const Box = ()=>{
    return(
        <View style={{
            flexDirection:"row",
            marginTop:20,
            backgroundColor:'#527f55',
            paddingVertical:5,
            borderRadius:10,
            marginHorizontal:7,
            
        }} >

<Image  source={
          require('./pics/user.png')
      } style={{
        width:'21%',
        height:80,
        borderRadius:8,
        marginLeft:10,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,

    }}   />

    <View style={{
        position:'absolute',
        top:30,
        left:120,
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        flexDirection:'column',
    }} >
        <Text  style={{
             fontWeight:'bold',
             fontSize:18,
             color:'#fff',
        }} > 
        Profile
        </Text>
        <Text style={{
             fontWeight:'bold',
             fontSize:18,
             color:'#fff',
        }} > 
        Agent : Jean Pierre Gakou
        </Text>
    </View>


        </View>
    )
}

const Opt = ()=>{
    return(

       <View style={{
            flexDirection:"column",
            marginTop:5,
            backgroundColor:'#527f55',
            paddingVertical:10,
            borderRadius:10,
            marginHorizontal:7,
            
            
        }} >

<TouchableOpacity>


<Text style={{
    backgroundColor:"white",
    textAlign:'center',
    padding:20,
    width:310,
    marginTop:10,
    marginLeft:40,
    borderRadius:8,
    fontWeight:'bold',


    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

}} >
    Mon prochain Démenagement
</Text>

</TouchableOpacity>

<TouchableOpacity>


<Text style={{
    backgroundColor:"#eada2c",
    textAlign:'center',
    padding:20,
    width:310,
    marginTop:10,
    marginLeft:40,
    borderRadius:8,
    fontWeight:'bold',
    color:"white",

    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

}} >
    Mon Historique
</Text>

</TouchableOpacity>





        </View>
    )
}



const Opt0 = ()=>{
    return(

       <View style={{
            flexDirection:"column",
            marginTop:5,
            backgroundColor:'#527f55',
            paddingVertical:10,
            borderRadius:10,
            marginHorizontal:7,
            
            
        }} >

<TouchableOpacity>


<Text style={{
    backgroundColor:"#fffce2",
    textAlign:'center',
    padding:20,
    width:310,
    marginTop:10,
    marginLeft:40,
    borderRadius:8,
    fontWeight:'bold',


    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

}} >
    Contacter l'administration
</Text>

</TouchableOpacity>

<TouchableOpacity>


<Text style={{
    backgroundColor:"#db8843",
    textAlign:'center',
    padding:20,
    width:310,
    marginTop:10,
    marginLeft:40,
    borderRadius:8,
    fontWeight:'bold',
    color:"white",

    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

}} >
    News
</Text>

</TouchableOpacity>





        </View>
    )
}




const Opt1 = ()=>{
    return(

       <View style={{
            flexDirection:"column",
            marginTop:20,
            backgroundColor:'#eada2c',
            paddingVertical:10,
            borderRadius:10,
            marginHorizontal:7,
            
            
        }} >

<TouchableNativeFeedback>


<Text style={{
    backgroundColor:"#527f55",
    textAlign:'center',
    padding:20,
    width:310,
    marginTop:10,
    marginLeft:40,
    borderRadius:8,
    fontWeight:'bold',
    color:"white",


    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

}} >
    Me Déconnecter
</Text>

</TouchableNativeFeedback>




        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
    paddingTop: Platform.OS === 'android'? 35 : 0,
    flex:1,
    backgroundColor:"#e5e1de",

    }
})