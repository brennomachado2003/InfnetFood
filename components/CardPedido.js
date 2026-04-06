import{View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CardPedido({item, styles}){

    const getStatusColor = (status) => {
    switch (status) {
      case 'Entregue': return '#28a745';
      case 'A caminho': return '#ff8c00';
      case 'Cancelado': return '#dc3545';
      default: return tema.colors.subtexto;
    }
  };

  return(
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <Text style={styles.emoji}>{item.imagem}</Text>
        <View style={styles.itemInfo}>
          <Text style={styles.lojaNome}>{item.loja}</Text>
          <Text style={styles.dataText}>Pedido em {item.data}</Text>
        </View>
        <Text style={[styles.statusTag, { color: getStatusColor(item.status) }]}>
          {item.status}
        </Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.itensText}>{item.itens}</Text>
      
      <View style={styles.footerCard}>
        <Text style={styles.totalText}>Total: {item.total}</Text>
        <TouchableOpacity style={styles.btnAjuda}>
          <Text style={styles.btnAjudaText}>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}