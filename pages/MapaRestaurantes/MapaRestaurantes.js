import React from 'react';
import { View, Platform} from 'react-native';
import { restaurantes } from '../../mock/restaurantes';
import styles from './_mapaRestaurantes';
import Mapa from '../../components/Mapa/Mapa';

export default function MapaRestaurantes({ navigation }) {

  return (
    <View style={styles.container}>
      <Mapa 
        styles={styles} 
        navigation={navigation} 
        restaurantes={restaurantes} 
      />
    </View>
  );
}