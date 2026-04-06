import {View, Text, Switch} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function ModoEscuro({styles, isDark, onToggle}){
  return(
            <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.labelGroup}>
              <Ionicons 
                name={isDark ? "moon" : "sunny"} 
                size={22} 
                color={styles.iconTheme.color} 
              />
              <Text style={styles.label}>Modo Escuro</Text>
            </View>
            <Switch
              trackColor={{
                false: styles.switchColors.trackFalse,
                true: styles.switchColors.trackTrue
              }}
              thumbColor={styles.switchColors.thumb}
              onValueChange={onToggle}
              value={isDark}
            />
          </View>
          <Text style={styles.description}>
            Altere a aparência do aplicativo para reduzir o cansaço visual.
          </Text>
        </View>
  );
}