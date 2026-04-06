import {View, Text} from 'react-native';
import MenuItem from './MenuItem';

export default function Ajustes({styles, navigation}){
  return(
    <View style={styles.sectionCard}>
      <Text style={styles.sectionTitle}>Ajustes</Text>
      <MenuItem 
        styles={styles}
        icon="settings-outline" 
        title="Configurações" 
        onPress={() => navigation.navigate('Configuracoes')}
        color={styles.iconPrimary.color}
        borderColor={styles.borderDefault.color}
      />
      <MenuItem 
        styles={styles}
        icon="help-circle-outline" 
        title="Ajuda & Suporte" 
        color={styles.iconPrimary.color}
        borderColor={styles.borderDefault.color}
      />
    </View>
  );
}