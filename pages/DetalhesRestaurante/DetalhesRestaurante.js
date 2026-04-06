import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './_detalhesRestaurante';

export default function DetalhesRestaurante({ route }) {
  const { restaurante } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurante.imagem }} style={styles.foto} />
      
      <View style={styles.info}>
        <Text style={styles.nome}>{restaurante.nome}</Text>
        <Text style={styles.endereco}>{restaurante.endereco}</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.subtitulo}>Sobre</Text>
        <Text style={styles.descricao}>{restaurante.descricao}</Text>
        
        <Text style={styles.subtitulo}>Sugestão do Chef</Text>
        <View style={styles.cardPrato}>
          <Text style={styles.prato}>{restaurante.pratoPrincipal}</Text>
        </View>
      </View>
    </View>
  );
}