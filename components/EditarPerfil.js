import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function EditarPerfil({styles, usuarioLogado}){
  return(
    <View style={styles.header}>
      <Image source={{ uri: usuarioLogado.avatar }} style={styles.avatar} />
      <Text style={styles.userName}>{usuarioLogado.nome}</Text>
      <Text style={styles.userEmail}>{usuarioLogado.email}</Text>
      <TouchableOpacity style={styles.editBadge}>
        <Text style={styles.editBadgeText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}