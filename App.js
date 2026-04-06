import StackNavigation from './navigation/Stack/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { notificationService } from './services/notificationService';
import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const configurarNotificacoes = async () => {
      await notificationService.requestPermission();
    };
    configurarNotificacoes();
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
