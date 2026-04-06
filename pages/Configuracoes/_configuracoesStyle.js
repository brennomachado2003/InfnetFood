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
    fontSize: 28, 
    fontWeight: 'bold', 
    color: tema.colors.primaria, 
    marginBottom: 25, 
    marginTop: 20 
  },
  section: { 
    backgroundColor: tema.colors.card,
    borderRadius: 15, 
    padding: 20, 
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: tema.colors.texto, 
    marginBottom: 15 
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  labelGroup: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  label: { 
    fontSize: 16, 
    fontWeight: '500', 
    color: tema.colors.texto, 
    marginLeft: 10 
  },
  description: { 
    fontSize: 12, 
    color: tema.colors.subtexto, 
    marginTop: 8, 
    lineHeight: 18 
  },
  btnLogout: { 
    marginTop: 20, 
    padding: 18, 
    borderRadius: 15, 
    borderWidth: 1.5, 
    borderColor: '#dc3545', 
    alignItems: 'center' 
  },
  btnLogoutText: { 
    color: '#dc3545', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  iconTheme: {
    color: tema.dark ? "#FFD700" : "#FF8C00"
  },
  switchColors: {
    trackFalse: "#767577",
    trackTrue: "#FFD700",
    thumb: tema.dark ? "#FFD700" : "#f4f3f4"
  }
});