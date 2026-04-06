import { View, Text, Platform } from 'react-native';

export default function Mapa({styles, navigation, restaurantes}){
  const isWeb = Platform.OS === 'web';
  const centroRJ = {
    latitude: -22.9068,
    longitude: -43.1729,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  let MapView, Marker, Callout;
  if (!isWeb) {
    const Maps = require('react-native-maps');
    MapView = Maps.default;
    Marker = Maps.Marker;
    Callout = Maps.Callout;
  }
  
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