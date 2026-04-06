import React, { createContext, useState, useContext } from 'react';
import { PEDIDOS } from '../mock/pedidos';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);  
  const [pedidos, setPedidos] = useState(PEDIDOS); 

  const addToCart = (produto, quantidade) => {
    setItems((prev) => {
      const index = prev.findIndex(i => i.id === produto.id);
      if (index > -1) {
        const newItems = [...prev];
        newItems[index].quantidade += quantidade;
        return newItems;
      }
      return [...prev, { ...produto, quantidade }];
    });
  };

  const totalCart = items.reduce((acc, curr) => {
    const precoString = curr.preco || "0";
    const precoNum = parseFloat(precoString.replace('R$', '').replace(',', '.')) || 0;
    return acc + (precoNum * curr.quantidade);
  }, 0);

  const finalizarPedido = () => {
    if (items.length === 0) return;

    const novoPedido = {
      id: Math.random().toString(36).substr(2, 9),
      data: new Date().toLocaleDateString('pt-BR'),
      loja: 'InfnetFood Store',
      itens: items.map(i => `${i.quantidade}x ${i.nome}`).join(', '),
      total: `R$ ${totalCart.toFixed(2).replace('.', ',')}`,
      status: 'A caminho',
      imagem: '🛍️'
    };
    setPedidos([novoPedido, ...pedidos]); 
    setItems([]); 
  };

  return (
    <CartContext.Provider value={{ items, addToCart, totalCart, pedidos, finalizarPedido }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);