import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Opcional: para ícones

import Home from '../../pages/Home/Home';
import MapaRestaurantes from '../../pages/MapaRestaurantes/MapaRestaurantes';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Explorar" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Mapa" 
        component={MapaRestaurantes}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="map" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}