import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Navigation from './src/screens/Navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
  <Navigation></Navigation>
  );
  

}


