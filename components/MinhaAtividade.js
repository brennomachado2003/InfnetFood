import React from 'react';
import { View, Text } from 'react-native';
import MenuItem from './MenuItem';

export default function MinhaAtividade({ styles, navigation }) {
  return (
    <View style={styles.sectionCard}>
      <Text style={styles.sectionTitle}>Minha Atividade</Text>
      
      <MenuItem 
        styles={styles}
        icon="receipt-outline" 
        title="Meus Pedidos" 
        subtitle="Histórico de compras" 
        onPress={() => navigation.navigate('Pedidos')}
        color={styles.iconPrimary.color}
        borderColor={styles.borderDefault.color}
      />
      
      <MenuItem 
        styles={styles}
        icon="pricetag-outline" 
        title="Cupons" 
        subtitle="3 cupons disponíveis" 
        color={styles.iconSuccess.color}
        borderColor={styles.borderDefault.color}
      />
    </View>
  );
}