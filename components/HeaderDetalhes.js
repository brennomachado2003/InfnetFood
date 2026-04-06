import React from 'react';
import { Text, Animated } from 'react-native';

export default function HeaderDetalhes({ produto, styles, scaleAnim }){
  return(
    <Animated.View style={[styles.headerCard, { transform: [{ scale: scaleAnim }] }]}>
      <Text style={styles.produtoEmoji}>{produto.imagem}</Text>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>
    </Animated.View>
  );
}