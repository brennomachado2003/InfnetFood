import { StyleSheet } from 'react-native';

export const getStyles = (tema) => StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: tema.colors.fundo,
    padding: 20
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: tema.colors.primaria, 
    marginBottom: 20, 
    marginTop: 30 
  },
  itemCard: { 
    backgroundColor: tema.dark ? '#1E1E1E' : '#FFF', 
    padding: 15, 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemContent: {
    flex: 1
  },
  emoji: { 
    fontSize: 30, 
    marginRight: 15 
  },
  nome: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    color: tema.colors.texto 
  },
  subtexto: {
    color: tema.colors.subtexto,
    fontSize: 14
  },
  footer: { 
    borderTopWidth: 1, 
    borderColor: tema.colors.border, 
    paddingTop: 20 
  },
  totalLabel: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'right', 
    marginBottom: 15, 
    color: tema.colors.texto 
  },
  btnFinalizar: { 
    backgroundColor: '#FFD700', 
    padding: 18, 
    borderRadius: 12, 
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#D4B600'
  },
  btnText: { 
    color: '#003399', 
    fontWeight: 'bold' 
  },
  empty: { 
    textAlign: 'center', 
    marginTop: 50, 
    color: tema.colors.subtexto 
  }
});