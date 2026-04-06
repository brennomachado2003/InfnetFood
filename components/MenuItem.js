import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MenuItem({ styles, icon, title, subtitle, onPress, color, borderColor }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}> 
      <View style={[styles.iconBox, { backgroundColor: color + '20' }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>
      
      <View style={styles.menuText}>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
      
      <Ionicons name="chevron-forward" size={18} color={borderColor} />
    </TouchableOpacity>
  );
}