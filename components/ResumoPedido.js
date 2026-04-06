import {View, Text} from 'react-native';
import React from 'react';

export default function ResumoPedido({items, totalCart, styles}){
  return(
          <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo dos Itens</Text>
        {items.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={styles.itemInfo}>{item.quantidade}x {item.nome}</Text>
            <Text style={styles.itemPreco}>{item.preco}</Text>
          </View>
        ))}
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total a pagar:</Text>
          <Text style={styles.totalValor}>R$ {totalCart.toFixed(2).replace('.', ',')}</Text>
        </View>
      </View>
  );
}