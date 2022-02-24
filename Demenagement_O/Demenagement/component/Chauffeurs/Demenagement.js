import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements/dist/buttons/Button'

export default function Demenagement() {
  return (
    <View style={styles.container} >
        <Panel />
    </View>
  )
}

const Panel = ()=>{
    return(
        <View style={{
            marginLeft:15,
            marginTop:100,
            borderRadius:16,
            backgroundColor:"white",
            width:360,
            flexDirection:"column",
height:600,


shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

        }} >

<Text style={{
    position:'absolute',
    backgroundColor:"#ddaa42",
    textAlign:'center',
    padding:12,
    width:110,
    marginTop:5,
    borderRadius:14,
    fontWeight:'bold',
    color:"white",
marginLeft:4,
    top:-90,


    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

}} > Retour</Text>



<View style={{ 
    marginTop:8,
    flexDirection:'row', 
    marginLeft:10,

    }} >

<Text style={{ 
    width:165,
    borderRadius:4,
fontSize:17,
fontWeight:'bold',
    paddingTop:24,
        height:110,
        marginLeft:5,
        color:"white", 
        backgroundColor:"#db8843",
        textAlign:'center'}}  > Destination: </Text>
<Text 

style={{
    borderRadius:4,
    fontSize:17,
fontWeight:'bold',
    paddingTop:24,
    marginLeft:5,
    width:160,
    height:110,
    marginLeft:5,
    color:"white", 
    backgroundColor:"#db8843",
    textAlign:'center'}}

> Gains: </Text>

</View>

<View  style={{
    width:328,
    height:390,
    marginLeft:17,
    marginTop:15,
    backgroundColor:"black",
    borderRadius:5,
    justifyContent:'center',
}} >

<Text style={{
    fontSize:24,
    fontWeight:'bold',
    color:"white",
    textAlign:'center',
}} >
    Détails complets sur le démenagement[!]
</Text>


</View>


<Text style={{
    position:'absolute',
    backgroundColor:"#ddaa42",
    textAlign:'center',
    padding:20,
    width:170,
    marginTop:10,
    marginLeft:40,
    borderRadius:14,
    fontWeight:'bold',
    color:"white",
marginLeft:85,
    bottom:-25,


    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,

}} > Suivre mon trajet </Text>


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
    paddingTop: Platform.OS === 'android'? 35 : 0,
    flex:1,
    backgroundColor:"#527f55",

    },
    boxes:{
        width:200,
        height:150,
        marginLeft:5,
        color:"white"
        

    }

})

