import React from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { users } from '../../mock/user';
import { useTheme } from '../../context/ThemeContext';
import {getStyles} from './_perfilStyle';
import DadosPessoais from '../../components/DadosPessoais';
import MinhaAtividade from '../../components/MinhaAtividade';
import Ajustes from '../../components/Ajustes';
import EditarPerfil from '../../components/EditarPerfil';
import { useAuth } from '../../context/AuthContext';


export default function Perfil({ navigation }) {
  const { tema } = useTheme();
  const styles = getStyles(tema);
  const { user, logout } = useAuth();
  const usuarioLogado = user;

  const handleLogout = async () => {
    await logout();
  };


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <EditarPerfil styles={styles} usuarioLogado={usuarioLogado}/>

      <DadosPessoais styles={styles} usuarioLogado={usuarioLogado}/>

      <MinhaAtividade styles={styles} navigation={navigation}/>

      <Ajustes styles={styles} navigation={navigation}/>

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleLogout}
      >
        <Ionicons name="log-out-outline" size={20} color="#FF4444" />
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
      
      <Text style={styles.versionText}>Versão 1.0.4 - InfnetFood</Text>
    </ScrollView>
  );
}