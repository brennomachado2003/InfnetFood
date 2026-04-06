import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ListaCategorias({styles, categorias}){
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.categoryCard}
      onPress={() => navigation.navigate('Produtos', { categoryId: item.id, categoryName: item.nome })}
    >
      <Ionicons name={item.icone} size={30} color={styles.iconColor.color} />
      <Text style={styles.categoryText}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return(
    <FlatList
      data={categorias}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listPadding}
      showsVerticalScrollIndicator={false}
    />
  );
}