import React, { useState } from 'react'; 
import { View, TextInput, ActivityIndicator, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { apiService } from '../services/apiCEP';
import {notify} from '../utils/alert';

export default function EnderecoEntrega({ styles, onEnderecoValido }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [buscandoCep, setBuscandoCep] = useState(false);

  const handleCEPChange = async (valor) => {
    setCep(valor);
    if (valor.length === 8) {
      setBuscandoCep(true);
      const resultado = await apiService.buscarEnderecoPorCEP(valor);
      
      if (resultado && !resultado.erro) {
        setEndereco(resultado.enderecoCompleto);
        onEnderecoValido(resultado.enderecoCompleto);
      } else {
        notify(resultado?.mensagem || "CEP não encontrado");
        setEndereco('');
        onEnderecoValido('');
      }
      setBuscandoCep(false);
    }
  };

  const handleEnderecoManual = (texto) => {
    setEndereco(texto);
    onEnderecoValido(texto);
  };

  return (
    <View style={styles.section}>
      <View style={styles.labelGroup}>
        <Ionicons 
          name="location" 
          size={20} 
          color={styles.iconColor.color} 
        />
        <Text style={styles.sectionTitle}> Endereço de Entrega</Text>
      </View>

      <View style={styles.cepRow}>
        <TextInput
          style={[styles.input, styles.inputCep]}
          value={cep}
          onChangeText={handleCEPChange}
          placeholder="Digite o CEP"
          placeholderTextColor={styles.placeholderColor.color}
          keyboardType="numeric"
          maxLength={8}
        />
        {buscandoCep && (
          <ActivityIndicator 
            size="small" 
            color={styles.iconColor.color} 
            style={styles.loaderCep} 
          />
        )}
      </View>

      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={handleEnderecoManual}
        placeholder="Endereço completo"
        placeholderTextColor={styles.placeholderColor.color}
        multiline
      />
    </View>
  );
}