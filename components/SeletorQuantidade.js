import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SeletorQuantidade({ styles, quantidade, aumentar, diminuir }) {
  return (
    <View style={styles.selectionArea}>
      <Text style={styles.label}>Quantidade</Text>
      <View style={styles.counter}>
        <TouchableOpacity onPress={diminuir} style={styles.btnCounter}>
          <Ionicons name="remove" size={24} color={styles.iconColor.color} />
        </TouchableOpacity>
        
        <Text style={styles.qtdeText}>{quantidade}</Text>
        
        <TouchableOpacity onPress={aumentar} style={styles.btnCounter}>
          <Ionicons name="add" size={24} color={styles.iconColor.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
}