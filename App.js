import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import from local files
import Login from './components/Login';
import AssetExample from './components/AssetExample';
import Dashboard from './components/Dashboard';
import MainPage from './components/MainPage';
// or any pure javascript modules available in npm
const HomeScreen = ({ navigation }) => {
  return (
    <Button 
    color = "#141b28"
      title="Go to signup"
      onPress={() =>
        navigation.navigate({ name: 'Login' })
      }
    />
  );
};
const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Login" component={Login}
        options={{headerShown:false}} />
        <Stack.Screen name="AssetExample" component={AssetExample}
        options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard}
        options={{headerShown:false}}/>
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
 
});
