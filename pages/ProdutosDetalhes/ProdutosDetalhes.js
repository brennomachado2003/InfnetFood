import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { getStyles } from './_produtosDetalhesStyles';
import HeaderDetalhes from '../../components/HeaderDetalhes';
import SeletorQuantidade from '../../components/SeletorQuantidade';

export default function ProdutosDetalhes({ route, navigation }) {
  const { produto } = route.params;
  const { tema } = useTheme();
  const styles = getStyles(tema);
  
  const [quantidade, setQuantidade] = useState(1);
  const { addToCart } = useCart();

  const scaleAnim = useRef(new Animated.Value(1)).current; 
  const colorAnim = useRef(new Animated.Value(0)).current;

  const aumentar = () => setQuantidade(prev => prev + 1);
  const diminuir = () => {
    if (quantidade > 1) setQuantidade(prev => prev - 1);
  };

  const handleAdicionarAoCarrinho = () => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: false, 
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          useNativeDriver: false,
        }),
      ]),
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start(() => {
      addToCart(produto, quantidade);
      navigation.navigate('Carrinho');    
      colorAnim.setValue(0);
    });
  };

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFD700', '#28a745'] 
  });

  return (
    <View style={styles.container}>
      
      <HeaderDetalhes 
        produto={produto} 
        styles={styles} 
        scaleAnim={scaleAnim} 
      />

      <SeletorQuantidade 
        styles={styles}
        quantidade={quantidade}
        aumentar={aumentar}
        diminuir={diminuir}
      />

      <Animated.View style={[
        styles.animatedBtnContainer, 
        { transform: [{ scale: scaleAnim }], backgroundColor }
      ]}>
        <TouchableOpacity 
          style={styles.btnInner} 
          onPress={handleAdicionarAoCarrinho}
          activeOpacity={0.7}
        >
          <Text style={styles.btnText}>ADICIONAR AO CARRINHO</Text>
        </TouchableOpacity>
      </Animated.View>
      
    </View>
  );
}