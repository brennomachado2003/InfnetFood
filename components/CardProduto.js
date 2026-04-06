import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CardProduto({item, styles}){
  const navigation = useNavigation();

  return(
    <TouchableOpacity 
      style={styles.produtoCard} 
      onPress={() => navigation.navigate('ProdutosDetalhes', { produto: item })}
    >
      <Text style={styles.produtoEmoji}>{item.imagem}</Text>
      <View>
        <Text style={styles.produtoNome}>{item.nome}</Text>
        <Text style={styles.produtoPreco}>{item.preco}</Text>
      </View>
    </TouchableOpacity>
  );
}