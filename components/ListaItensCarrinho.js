import {View, Text, FlatList} from 'react-native';
import React from 'react';

export default function ListaItensCarrinho({items, styles}){
  return(
    <FlatList data={items} keyExtractor={(item) => item.id} renderItem={({ item }) => (
        <View style={styles.itemCard}>
          <Text style={styles.emoji}>{item.imagem}</Text>
          <View style={styles.itemContent}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.subtexto}>{item.quantidade}x {item.preco}</Text>
          </View>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.empty}>Carrinho vazio...</Text>}
     />
  );
}