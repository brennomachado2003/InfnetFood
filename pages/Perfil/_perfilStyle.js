import { StyleSheet } from 'react-native';

export const getStyles = (tema) => StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: tema.colors.fundo 
  },
  header: { 
    alignItems: 'center', 
    padding: 30, 
    backgroundColor: tema.colors.card, 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    borderWidth: 3, 
    borderColor: tema.colors.primaria 
  },
  userName: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: tema.colors.primaria, 
    marginTop: 10 
  },
  userEmail: { 
    fontSize: 14, 
    color: tema.colors.subtexto, 
    marginBottom: 10 
  },
  editBadge: { 
    backgroundColor: tema.dark ? '#333' : '#E8EBF0', 
    paddingVertical: 5, 
    paddingHorizontal: 15, 
    borderRadius: 20 
  },
  editBadgeText: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    color: tema.colors.primaria 
  },
  sectionCard: { 
    backgroundColor: tema.colors.card, 
    marginHorizontal: 20, 
    marginTop: 20, 
    borderRadius: 20, 
    padding: 15, 
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    color: tema.colors.subtexto, 
    marginBottom: 15, 
    textTransform: 'uppercase', 
    letterSpacing: 1 
  },
  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  iconBox: { 
    width: 40, 
    height: 40, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  menuText: { 
    flex: 1, 
    marginLeft: 15 
  },
  menuTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: tema.colors.texto 
  },
  menuSubtitle: { 
    fontSize: 12, 
    color: tema.colors.subtexto 
  },
  logoutButton: { 
    margin: 30,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 15, 
    borderRadius: 15, 
    borderWidth: 1.5,
    borderColor: '#FF4444'
  },
  logoutText: { 
    color: '#FF4444', 
    fontWeight: 'bold', 
    marginLeft: 10 
  },
  versionText: { 
    textAlign: 'center', 
    color: tema.colors.subtexto, 
    marginBottom: 30, 
    fontSize: 10,
    opacity: 0.5
  },
  iconPrimary: {
    color: tema.colors.primaria
  },
  iconSuccess: {
    color: '#28a745'
  },
  borderDefault: {
    color: tema.colors.border
  }
});