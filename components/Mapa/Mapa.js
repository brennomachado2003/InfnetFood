import { View, Text } from 'react-native';
import {MapView, Marker, Callout} from 'react-native-maps';

export default function Mapa({styles, navigation, restaurantes}){
  const centroRJ = {
    latitude: -22.9068,
    longitude: -43.1729,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };
  
    const renderCallout = (restaurante) => (
    <Callout onPress={() => navigation.navigate('DetalhesRestaurante', { restaurante })}>
      <View style={styles.calloutContainer}>
        <Text style={styles.calloutTitle}>{restaurante.nome}</Text>
        <Text style={styles.calloutText}>Ver detalhes...</Text>
      </View>
    </Callout>
  );

  return (
    MapView && (
          <MapView style={styles.map} initialRegion={centroRJ}>
            {restaurantes.map((restaurante) => (
              <Marker
                key={restaurante.id}
                coordinate={{ latitude: restaurante.latitude, longitude: restaurante.longitude }}
                title={restaurante.nome}
                collisionBehavior="required"
              >
                {renderCallout(restaurante)}
              </Marker>
            ))}
          </MapView>
        )
  );
}