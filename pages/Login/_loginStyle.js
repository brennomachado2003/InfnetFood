import { StyleSheet } from 'react-native';

const CORES = {
  amarelo: '#FFD700',
  azulForte: '#003399',
  fundo: '#F0F2F5',
  branco: '#FFFFFF',
  texto: '#1C1C1E'
};

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: CORES.fundo, 
    padding: 30, 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 32, 
    fontWeight: '900', 
    color: CORES.azulForte, 
    textAlign: 'center', 
    paddingBottom: 30 
  },  
  card: { 
    backgroundColor: CORES.branco, 
    borderRadius: 30, 
    padding: 25, 
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  inputGroup: { 
    marginBottom: 20 
  },
  label: { 
    fontSize: 11, 
    fontWeight: '900', 
    color: CORES.azulForte, 
    marginBottom: 8, 
    marginLeft: 5 
  },
  inputWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F8F9FB', 
    borderRadius: 16, 
    borderWidth: 1.5, 
    borderColor: '#E8EBF0',
  },
  inputIcon: { 
    paddingLeft: 15 
  },
  input: { 
    flex: 1, 
    padding: 15, 
    fontSize: 16, 
    color: CORES.texto 
  }, 
  button: { 
    backgroundColor: CORES.amarelo, 
    padding: 20, 
    borderRadius: 18, 
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#D4B600',
  },
  buttonText: { 
    color: CORES.azulForte, 
    fontWeight: '900', 
    fontSize: 18, 
    letterSpacing: 1 
  },
  CORES: CORES 
});