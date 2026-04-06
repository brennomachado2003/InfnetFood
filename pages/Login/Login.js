import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { users } from '../../mock/user';
import { useAuth } from '../../context/AuthContext';
import { styles } from './_loginStyle';
import InputCustomizado from '../../components/InputCustomizado'
import {notify} from '../../utils/alert';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  async function handleLogin() {
    if (!email || !password) {
      notify('Por favor, insira seu e-mail e senha.');
      return;
    }

    try {
      const user = users.find(
        (u) => u.email == email.trim().toLocaleLowerCase() && u.senha == password
      );

      if (!user) {
        notify('E-mail ou senha incorretos.')
        return;
      }
      
      login(user);
    } catch (error) {
      notify('Erro no Login: ' + error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>InfnetFood</Text>
      <View style={styles.card}>
        
        <InputCustomizado 
          label='E-MAIL'
          icon='person-outline'
          placeholder='exemplo@gil.com'
          styles={styles}
          value={email}
          onChangeText={setEmail}
          autoCapitalize = 'none'
          keyboardType = 'email-address'
        />

        <InputCustomizado 
          label='SENHA'
          icon='lock-closed-outline'
          placeholder='••••••••'
          styles={styles}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ENTRAR AGORA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}