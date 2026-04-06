import React from 'react';
import {View} from 'react-native';
import { CATEGORIAS } from '../../mock/categoria';
import { useTheme } from '../../context/ThemeContext'; 
import {getStyles} from './_homeStyle';
import BotaoTopHome from '../../components/BotaoTopHome';
import ListaCategorias from '../../components/ListaCategorias';

export default function Home() {
  const { tema } = useTheme(); 
  const styles = getStyles(tema);

  return (
    <View style={styles.container}>      
      <BotaoTopHome styles={styles}/>
      <ListaCategorias categorias={CATEGORIAS} styles={styles}/>
    </View>
  );
}