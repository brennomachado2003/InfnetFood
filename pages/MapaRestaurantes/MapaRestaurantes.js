import React from 'react';
import { View, Platform} from 'react-native';
import { restaurantes } from '../../mock/restaurantes';
import styles from './_mapaRestaurantes';
import MapaMobile from '../../components/Mapa/Mapa';
import MapaWeb from '../../components/Mapa/Mapa.web';

export default function MapaRestaurantes({ navigation }) {
  const isWeb = Platform.OS === 'web';

  return (
    <View style={styles.container}>
      {isWeb ? (<MapaWeb styles={styles} navigation={navigation} restaurantes={restaurantes}/>) : (<MapaMobile styles={styles} navigation={navigation} restaurantes={restaurantes}/>)}
    </View>
  );
}