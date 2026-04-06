import MenuItem from './MenuItem';
import {View, Text} from 'react-native';

export default function DadosPessoais({styles, usuarioLogado}){
  return(
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <MenuItem 
          styles={styles}
          icon="call-outline" 
          title="Telefone" 
          subtitle={usuarioLogado.telefone} 
          color={styles.iconPrimary.color} 
          borderColor={styles.borderDefault.color}
        />

        <MenuItem 
          styles={styles}
          icon="location-outline" 
          title="Endereço Principal" 
          subtitle={usuarioLogado.endereco} 
          color={styles.iconPrimary.color}
          borderColor={styles.borderDefault.color}
        />
      </View>
  );
}