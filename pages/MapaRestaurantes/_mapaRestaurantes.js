import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  map: { 
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height 
  },
  headerContainer: { 
    alignItems: 'center', 
    width: '100%' 
  },
  webHeader: { 
    padding: 20, 
    backgroundColor: '#003399', 
    width: '100%', 
    alignItems: 'center',
    marginBottom: 0 
  },
  webHeaderText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 18 
  },
  webSubText: { 
    color: '#ddd', 
    fontSize: 12,
    marginTop: 4
  },
  listContainer: { 
    paddingHorizontal: 15 
  },
  listTitle: { 
    fontWeight: 'bold', 
    marginVertical: 15, 
    color: '#333', 
    alignSelf: 'flex-start',
    fontSize: 16
  },
  webButton: { 
    padding: 15, 
    backgroundColor: '#f8f8f8', 
    marginBottom: 10, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  webButtonText: { 
    color: '#003399', 
    fontWeight: '600' 
  },
  footerSpacing: { 
    height: 100 
  },
  calloutContainer: { 
    padding: 5, 
    width: 150 
  },
  calloutTitle: { 
    fontWeight: 'bold' 
  },
  calloutText: { 
    fontSize: 12 
  }
});

export default styles;
