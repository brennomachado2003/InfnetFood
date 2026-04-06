import { Alert, Platform } from 'react-native';

export const notify = (mensagem, titulo = "Atenção") => {
  if (Platform.OS === 'web') {
    alert(`${titulo}: ${mensagem}`);
  } else {
    Alert.alert(titulo, mensagem);
  }
};