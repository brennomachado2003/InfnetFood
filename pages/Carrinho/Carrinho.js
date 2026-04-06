import React from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import {getStyles} from './_carrinhoStyle';
import ListaItensCarrinho from '../../components/ListaItensCarrinho';
import {notify} from '../../utils/alert';

export default function Carrinho({ navigation }) {
  const { items, totalCart } = useCart();
  const { tema } = useTheme();
  const styles = getStyles(tema);

  const handleIrParaCheckout = () => {
    if (items.length === 0) {
      notify('Seu carrinho está vazio!')
      return;
    }
    navigation.navigate('Checkout'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Carrinho</Text>

      <ListaItensCarrinho styles={styles} items={items}/>

      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total: R$ {totalCart.toFixed(2).replace('.', ',')}</Text>
        <TouchableOpacity style={styles.btnFinalizar} onPress={handleIrParaCheckout}>
          <Text style={styles.btnText}>REVISAR PEDIDO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}