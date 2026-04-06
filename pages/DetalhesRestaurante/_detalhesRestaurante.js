import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  foto: { width: '100%', height: 200 },
  info: { padding: 20 },
  nome: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  endereco: { fontSize: 14, color: '#666', marginBottom: 10 },
  divider: { height: 1, backgroundColor: '#EEE', marginVertical: 15 },
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginTop: 10, color: '#003399' },
  descricao: { fontSize: 15, color: '#444', lineHeight: 22 },
  cardPrato: { padding: 15, backgroundColor: '#F8F8F8', borderRadius: 10, marginTop: 10 },
  prato: { fontSize: 16, fontWeight: '600', color: '#FF4444' }
});

export default styles;