import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { notificationService } from '../../services/notificationService';
import { getStyles } from './_checkoutsStyle';
import {notify} from '../../utils/alert';
import ResumoPedido from '../../components/ResumoPedido';
import EnderecoEntrega from '../../components/EnderecoEntrega';
import MetodoPagamento from '../../components/MetodoPagamento';

export default function Checkout({ navigation }) {
  const { tema } = useTheme();
  const styles = getStyles(tema); 

  const { items, totalCart, finalizarPedido } = useCart();
  const [enderecoFinal, setEnderecoFinal] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('Cartão de Crédito');
  const [carregando, setCarregando] = useState(false);

  const handleConfirmarPedido = () => {
    if (!enderecoFinal || enderecoFinal.trim().length < 5) {
      notify('Por favor, insira um endereço de entrega válido.');
      return;
    }

    setCarregando(true);

    setTimeout(async () => {
      finalizarPedido(); 
      setCarregando(false);
      
      if (Platform.OS !== 'web') {
        try {
          await notificationService.enviarNotificacaoLocal(
            "Pedido Confirmado!",
            "Seu lanche já está sendo preparado!",
            { screen: 'Pedidos' }
          );
        } catch (error) {
          console.log("Erro na notificação:", error);
        }
      } else {
        alert("Pedido Confirmado! Seu lanche já está sendo preparado.");
      }

      navigation.navigate('home');
    }, 1500);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Finalizar Pedido</Text>

      <ResumoPedido styles={styles} totalCart={totalCart} items={items}/>

      <EnderecoEntrega 
        styles={styles} 
        onEnderecoValido={(texto) => setEnderecoFinal(texto)} 
      />

      <MetodoPagamento 
        styles={styles} 
        metodoPagamento={metodoPagamento} 
        setMetodoPagamento={setMetodoPagamento}
      />

      <TouchableOpacity 
        style={[styles.btnConfirmar, (carregando || items.length === 0) && styles.btnDesativado]} 
        onPress={handleConfirmarPedido}
        disabled={carregando || items.length === 0}
      >
        {carregando ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="small" color="#FFF" />
            <Text style={styles.btnTextCarregando}>PROCESSANDO...</Text>
          </View>
        ) : (
          <Text style={styles.btnText}>PAGAR R$ {totalCart.toFixed(2)}</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}