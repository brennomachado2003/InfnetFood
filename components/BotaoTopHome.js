import {View, TouchableOpacity, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function BotaoTopHome({styles}){
  const navigation = useNavigation();

  return(
    <View style={styles.headerContainer}>
      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Perfil')}>
          <Ionicons name="person-circle-outline" size={40} color={styles.iconColor.color} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Configuracoes')}>
          <Ionicons name="settings-outline" size={32} color={styles.iconColor.color} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.headerTitle}>
        O que vamos comer hoje?
      </Text>
    </View>
  );
}