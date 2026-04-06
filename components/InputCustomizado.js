import {View, Text, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function InputCustomizado({label, icon, styles, placeholder, ...props}){
  return(
        <View style={styles.inputGroup}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.inputWrapper}>
            <Ionicons 
              name={icon}
              size={20} 
              color={styles.CORES.azulForte} 
              style={styles.inputIcon} 
            />
            <TextInput
              style={styles.input}
              placeholder = {placeholder}
              placeholderTextColor="#A0A0A0"
              {...props}
            />
          </View>
        </View>
  );
}