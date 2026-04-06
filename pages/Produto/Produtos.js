import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { PRODUTOS } from '../../mock/produtos';
import { useTheme } from '../../context/ThemeContext';
import {getStyles} from './_produtosStyles';
import CardProduto from '../../components/CardProduto';

export default function Produtos({ route }) {
  const { categoryId, categoryName } = route.params;
  const { tema } = useTheme();
  const styles = getStyles(tema);

  const produtosFiltrados = PRODUTOS.filter(item => item.categoryId === categoryId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu: {categoryName}</Text>
      
      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <CardProduto item={item} styles={styles}/>}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum produto encontrado nesta categoria.</Text>
        }
      />
    </View>
  );
}