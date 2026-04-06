import { StyleSheet } from 'react-native';

export const getStyles = (tema) => StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: tema.colors.fundo 
  },
  content: { 
    padding: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: tema.colors.primaria, 
    marginBottom: 25, 
    marginTop: 20 
  },
  section: { 
    backgroundColor: tema.colors.card, 
    borderRadius: 15, 
    padding: 15, 
    marginBottom: 20, 
    elevation: 2,
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: tema.colors.texto, 
    marginBottom: 10 
  },
  itemRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 8 
  },
  itemInfo: { 
    color: tema.colors.subtexto 
  },
  itemPreco: { 
    fontWeight: '500', 
    color: tema.colors.texto 
  },
  totalRow: { 
    borderTopWidth: 1, 
    borderColor: tema.colors.border, 
    marginTop: 10, 
    paddingTop: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  totalLabel: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: tema.colors.texto 
  },
  totalValor: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#28a745' 
  },
  labelGroup: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10 
  },
  cepRow: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  loaderCep: { 
    marginLeft: 10, 
    marginBottom: 10 
  },
  input: { 
    backgroundColor: tema.dark ? '#2A2A2A' : '#F8F9FB', 
    borderWidth: 1, 
    borderColor: tema.colors.border, 
    borderRadius: 10, 
    padding: 12, 
    fontSize: 14,
    color: tema.colors.texto,
    textAlignVertical: 'top',
  },
  inputCep: {
    flex: 1,
    marginBottom: 10,
  },
  selector: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10 
  },
  selectorText: { 
    marginLeft: 10, 
    color: tema.colors.texto 
  },
  btnConfirmar: { 
    backgroundColor: '#FFD700', 
    padding: 20, 
    borderRadius: 15, 
    alignItems: 'center', 
    marginTop: 10,
    marginBottom: 40,
    borderBottomWidth: 4,
    borderBottomColor: '#D4B600'
  },
  btnDesativado: {
    backgroundColor: tema.dark ? '#444' : '#CCC',
    borderBottomColor: 'transparent'
  },
  btnText: { 
    color: '#003399', 
    fontWeight: 'bold', 
    fontSize: 18 
  },
  btnTextCarregando: { 
    color: '#003399', 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginLeft: 10 
  },
  loaderContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  iconColor: {
    color: tema.colors.primaria
  },
  placeholderColor: {
    color: tema.colors.subtexto
  }
});