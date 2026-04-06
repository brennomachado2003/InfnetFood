import { StyleSheet } from 'react-native';

export const getStyles = (tema) => StyleSheet.create({
  container: { 
    flex: 1, 
    paddingTop: 50,
    backgroundColor: tema.colors.fundo 
  },
  headerContainer: {
    paddingHorizontal: 20,
    marginBottom: 10
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 15
  },
  headerTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: tema.colors.primaria 
  },
  listPadding: { 
    paddingHorizontal: 20,
    paddingBottom: 20 
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    backgroundColor: tema.colors.card,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
    color: tema.colors.texto
  },
  iconButton: {
    padding: 5
  },
  iconColor: {
    color: tema.colors.primaria
  }
});