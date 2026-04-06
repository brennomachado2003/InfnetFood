import React from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext'; 
import { useAuth } from '../../context/AuthContext'; 
import { getStyles } from './_configuracoesStyle';  
import ModoEscuro from '../../components/ModoEscuro';

export default function Configuracoes() {
  const { tema, toggleTheme } = useTheme();
  const { logout } = useAuth();   
  const styles = getStyles(tema);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Configurações</Text>
        
        <ModoEscuro styles={styles} isDark={tema.dark} onToggle={toggleTheme}/>

        <TouchableOpacity style={styles.btnLogout} onPress={logout}>
          <Text style={styles.btnLogoutText}>Sair da Conta</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}