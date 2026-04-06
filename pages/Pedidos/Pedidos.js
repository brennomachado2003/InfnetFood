import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import {getStyles} from './_pedidosStyle';
import CardPedido from '../../components/CardPedido';

export default function Pedidos() {
  const { pedidos } = useCart(); 
  const { tema } = useTheme();
  const styles = getStyles(tema);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <CardPedido item={item} styles={styles}/>}
        contentContainerStyle={styles.listPadding}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum pedido realizado.</Text>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}