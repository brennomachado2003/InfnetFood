import { StyleSheet } from 'react-native';

export const getStyles = (tema) => StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: tema.colors.fundo, 
    padding: 20 
  },
  headerCard: { 
    backgroundColor: tema.colors.card, 
    borderRadius: 20, 
    padding: 30, 
    alignItems: 'center',
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  emoji: { 
    fontSize: 80, 
    marginBottom: 10 
  },
  nome: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: tema.colors.primaria 
  },
  preco: { 
    fontSize: 20, 
    color: '#28a745', 
    marginTop: 5 
  },
  selectionArea: { 
    backgroundColor: tema.colors.card, 
    padding: 20, 
    borderRadius: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 20
  },
  label: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: tema.colors.texto 
  },
  counter: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  btnCounter: { 
    backgroundColor: tema.dark ? '#333' : '#F0F2F5', 
    padding: 10, 
    borderRadius: 10 
  },
  qtdeText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginHorizontal: 20, 
    color: tema.colors.texto 
  },
  animatedBtnContainer: {
    borderRadius: 15,
    borderBottomWidth: 4,
    borderBottomColor: '#D4B600',
    overflow: 'hidden'
  },
  btnInner: { 
    padding: 20, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: { 
    color: '#003399', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  iconColor: {
    color: tema.colors.primaria
  },
  produtoEmoji: {
    fontSize: 80, 
    marginBottom: 10 
  }
});