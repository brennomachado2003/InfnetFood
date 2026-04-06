import { View, Text, TouchableOpacity, FlatList } from 'react-native';


export default function Mapa({styles, navigation, restaurantes}){
    const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.webHeader}>
        <Text style={styles.webHeaderText}>Explorar Restaurantes</Text>
        <Text style={styles.webSubText}>Abra no celular para ver o mapa interativo</Text>
      </View>
      <Text style={styles.listTitle}>Clique para ver detalhes:</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.webButton}
      onPress={() => navigation.navigate('DetalhesRestaurante', { restaurante: item })}
    >
      <Text style={styles.webButtonText}>{item.nome} →</Text>
    </TouchableOpacity>
  );

  const renderFooter = () => <View style={styles.footerSpacing} />;

  return(
    <FlatList
      data={restaurantes}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderHeader}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      ListFooterComponent={renderFooter}
    />
  );
}