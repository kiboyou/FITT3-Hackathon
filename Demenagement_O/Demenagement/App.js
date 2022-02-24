import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import connexion from './component/Clients/connexion';
import Home from './component/Chauffeurs/Home';
import Demenagement from './component/Chauffeurs/Demenagement';

export default function App() {
  const [text, setText] = useState("");

  return (
    // <Home/>
    <Demenagement/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android'? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
