import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MetodoPagamento({ styles, metodoPagamento, setMetodoPagamento }) {
  const opcoes = [
    { id: 'Dinheiro', label: 'Dinheiro (na entrega)', icon: 'cash-outline' },
    { id: 'Cartão de Crédito', label: 'Cartão de Crédito (App)', icon: 'card-outline' }
  ];

  return (
    <View style={styles.section}>
      <View style={styles.labelGroup}>
        <Ionicons 
          name="card" 
          size={20} 
          color={styles.iconColor.color} 
        />
        <Text style={styles.sectionTitle}> Método de Pagamento</Text>
      </View>

      {opcoes.map((opcao) => (
        <TouchableOpacity 
          style={styles.selector} 
          key={opcao.id} 
          onPress={() => setMetodoPagamento(opcao.id)}
        >
          <Ionicons
            name={metodoPagamento === opcao.id ? "radio-button-on" : "radio-button-off"}
            size={20}
            color={styles.iconColor.color}
          />
          <Text style={styles.selectorText}>{opcao.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}