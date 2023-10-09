import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import Navigation from './src/screens/Navigation';
import T1 from './src/screens/Screen1';
import T2 from './src/screens/Screen2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Segunda Tela" component={SecondScreen} />
        <Stack.Screen name='Menu' component={Navigation} />
        <Stack.Screen name='Tela1' component={T1} />
        <Stack.Screen name='Tela2' component={T2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

