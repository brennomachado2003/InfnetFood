import { StyleSheet } from 'react-native';

export const getStyles = (tema) => StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: tema.colors.fundo, 
    paddingHorizontal: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: tema.colors.primaria, 
    marginTop: 40, 
    marginBottom: 20 
  },
  card: {
    backgroundColor: tema.colors.card,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerCard: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  itemInfo: { 
    flex: 1 
  },
  emoji: { 
    fontSize: 30, 
    marginRight: 12 
  },
  lojaNome: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: tema.colors.texto 
  },
  dataText: { 
    fontSize: 12, 
    color: tema.colors.subtexto 
  },
  statusTag: { 
    fontSize: 12, 
    fontWeight: 'bold' 
  },
  divider: { 
    height: 1, 
    backgroundColor: tema.colors.border, 
    marginVertical: 12 
  },
  itensText: { 
    fontSize: 14, 
    color: tema.colors.subtexto, 
    marginBottom: 12 
  },
  footerCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  totalText: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    color: tema.colors.texto 
  },
  btnAjuda: { 
    paddingVertical: 5, 
    paddingHorizontal: 15, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: tema.colors.border 
  },
  btnAjudaText: { 
    fontSize: 13, 
    color: tema.colors.primaria, 
    fontWeight: '600' 
  },
  empty: { 
    textAlign: 'center', 
    marginTop: 50, 
    color: tema.colors.subtexto 
  },
  listPadding: { 
    paddingBottom: 20 
  },
  statusEntregue: { 
    color: '#28a745' 
  },
  statusCaminho: { 
    color: '#ff8c00' 
  },
  statusCancelado: { 
    color: '#dc3545' 
  },
  statusPadrao: { 
    color: tema.colors.subtexto 
  }
});