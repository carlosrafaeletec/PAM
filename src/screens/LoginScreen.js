import React, { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, StyleSheet} from 'react-native';
import CheckBox from 'expo-checkbox';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const checkRememberedUser = async () => {
      const rememberedUser = await AsyncStorage.getItem('rememberedUser');
     /*  AsyncStorage.clear(); */
      if (rememberedUser) {
        navigation.replace('Home');
      }
    };
    checkRememberedUser();
  }, []);

  const handleLogin = async () => {
    if (username === 'usuario' && password === 'senha') {
      if (rememberMe) {
        await AsyncStorage.setItem('rememberedUser', username);
      }
      navigation.replace('Menu');
    } else {
      alert('Erro de autenticação');
    }
  };

  return (
    <View style={styles.tela}>
      <Text style={styles.apres}>
        Bem vindo ao
         BaianoFlix
      </Text>
      <View style={styles.inicio}>
        <Text style={styles.titulo}>Usuário</Text>
        <TextInput placeholder="Digite o nome do usuário" onChangeText={setUsername} style={styles.inp} />
        
        <Text style={styles.titulo}>Senha</Text>
        <TextInput placeholder="Sua Senha" onChangeText={setPassword} secureTextEntry style={styles.inp} />
        
        <CheckBox value={rememberMe} onValueChange={setRememberMe} style={styles.xeque} />
      </View>

      <Button title="Entrar" onPress={handleLogin} />
      <Text style={styles.lemb}>Lembrar-me</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  tela:{
    flex: 1,
    backgroundColor: '#000'
  },
  
  inicio:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '8%'
  },

  inp:{
    borderRadius: 5,
    marginLeft: 22,
    marginTop: 10,
    fontSize: 12
  },

  apres:{
    display: 'flex',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: 26,
    color: '#fff'
  },

  titulo:{
    fontSize: 24,
    marginTop: '9%',
    marginLeft: 20
  },

  xeque:{
    position: 'relative',
    left: '6%',
    top: '5%',
  },

  lemb:{
    bottom: '50%',
    fontSize: 14
  }
});