import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './src/screens/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Navigation />
    </NavigationContainer>
  );
}

