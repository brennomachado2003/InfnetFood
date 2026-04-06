import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useAuth } from '../../context/AuthContext';

import Login from '../../pages/Login/Login';
import Produtos from '../../pages/Produto/Produtos';
import ProdutosDetalhes from '../../pages/ProdutosDetalhes/ProdutosDetalhes';
import Carrinho from '../../pages/Carrinho/Carrinho';
import Perfil from '../../pages/Perfil/Perfil';
import Pedidos from '../../pages/Pedidos/Pedidos';
import Checkout from '../../pages/Checkout/Checkout';
import Configuracoes from '../../pages/Configuracoes/Configuracoes';
import DetalhesRestaurante from '../../pages/DetalhesRestaurante/DetalhesRestaurante';
import TabNavigation from '../Tabs/TabNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation(){
  const { isLogged, loading } = useAuth();

  if (loading) {
    return null; 
  }
  
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
    
    {isLogged ? (
      <>
        <Stack.Screen name="Main" component={TabNavigation} />
        <Stack.Screen 
            name="DetalhesRestaurante" 
            component={DetalhesRestaurante} 
            options={{ headerShown: true, title: 'Restaurante' }} 
          />
        <Stack.Screen name='Configuracoes' component={Configuracoes} options={{ headerShown: true }}/>
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: true }}/>
        <Stack.Screen name='Produtos' component={Produtos} options={{headerShown: true}}/>
        <Stack.Screen name='ProdutosDetalhes' component={ProdutosDetalhes} options={{ headerShown: true, title: 'Detalhes do Produto' }} />
        <Stack.Screen name='Carrinho' component={Carrinho} options={{ headerShown: true }} />
        <Stack.Screen name='Perfil' component={Perfil} options={{headerShown: true, title: 'Perfil'}}/>
        <Stack.Screen name="Pedidos" component={Pedidos} options={{ headerShown: true }}/>
      </>
      ) : (<Stack.Screen name='login' component={Login}/>)}
    </Stack.Navigator>
  );
}