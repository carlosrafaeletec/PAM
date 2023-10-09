import React from 'react';
import { Button, Text, View } from 'react-native';
/* import AsyncStorage from '@react-native-async-storage/async-storage';
 */


const SecondScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Cadastro</Text>
      <Button title="Fazer o Login" onPress={() => navigation.navigate('LoginScreen')} />
    </View>
  );
};
export default SecondScreen;