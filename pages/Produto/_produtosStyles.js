import {StyleSheet} from 'react-native';

export const getStyles = (tema) => StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: tema.colors.fundo, 
    padding: 20 
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: tema.colors.primaria, 
    marginBottom: 20, 
    marginTop: 40 
  },
  produtoCard: {
    backgroundColor: tema.colors.card,
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  produtoEmoji: { 
    fontSize: 30, 
    marginRight: 15 
  },
  produtoNome: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: tema.colors.texto 
  },
  produtoPreco: { 
    fontSize: 14, 
    color: '#28a745', 
    fontWeight: '600' 
  },
  empty: { 
    textAlign: 'center', 
    marginTop: 50, 
    color: tema.colors.subtexto 
  }
});