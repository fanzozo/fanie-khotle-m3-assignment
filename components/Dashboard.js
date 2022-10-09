import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Login from './Login';
//const User = placeholder("name");
//const [name, setName] = useState("");
 const Stack = createNativeStackNavigator();
export default function Dashboard({navigation}) {
  const [name, setName] = useState("");
 
  return (
  // const [name, setName] = useState(""); 
 <View style={styles.container}>
      <StatusBar style="auto" />
      
 <Text style={styles.loginText}>Welcome FANIE</Text>
       <TouchableOpacity style={styles.loginBtn}
        onPress={() => navigation.navigate('MainPage')}>
  <Text style={{color:"white"}}>Use App</Text>
</TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  
 
 
 
  
 
  loginBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#141b28",
  },
});