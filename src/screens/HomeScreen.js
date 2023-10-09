import React from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const HomeScreen = ({ navigation }) => {
  return(
    <View style={styles.tela}>
      <View>
        <Image
            source={require('../../assets/BAHIANOFLIX.png')}
        />
      </View>
      <View style={styles.entrada}>
        <Text>
          Clique no botão para fazer seu login!
        </Text>
      </View>

      <Button title="Faça seu login" onPress={() => navigation.navigate('Login')} />

      <Button title='Cadastre-se' onPress={() => navigation.navigate('SecondScreen')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tela:{
    flex: 1,
    backgroundColor: '#000'
  },

  entrada:{
    flex: 1,
    color: '#fff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  titulo:{
    fontSize: 14,
    marginTop: '2%',
    marginBottom: '8%',
    color: '#FFF',
    textAlign: 'center'
  },

});