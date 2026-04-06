# 🍔 InfnetFood - Sistema de Gestão de Restaurantes (v1.0.4)

Projeto de delivery desenvolvido em **React Native** para a disciplina de Desenvolvimento Mobile. O aplicativo oferece uma experiência completa de pedido de comida, desde a autenticação até o checkout.

## 📱 Fluxo da Aplicação
1. **Autenticação:** Tela de Login com validação de acesso.
2. **Navegação Principal (Tabs):** - **Explorar (Home):** Catálogo de categorias (Lanches, Bebidas, Pizzas, etc.) e lista de restaurantes.
   - **Mapa:** Localização de restaurantes parceiros (Integração com Google Maps no Mobile / Lista na Web).
3. **Fluxo de Pedido:**
   - **Produtos:** Visualização dos itens do cardápio.
   - **Detalhes do Produto:** Informações específicas e adição ao carrinho.
   - **Carrinho:** Gestão de itens com cálculo dinâmico de total.
   - **Checkout:** Finalização do pedido com endereço e método de pagamento.
4. **Perfil & Gestão:** Histórico de pedidos, configurações de tema (Modo Escuro) e logout.
   
## 📱 Visualização (Prints)
01/02/03-
<br>
<img width="448" height="574" alt="image" src="https://github.com/user-attachments/assets/50fe37a5-48aa-4d77-ad61-3c05acf0d1b6" />

04-
<br>
<img width="389" height="116" alt="image" src="https://github.com/user-attachments/assets/638f4553-59b6-470c-b3a4-bf0203628f1f" />

05-
<br>
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/5cfdca17-9cc8-412c-b9d7-a5e42b1149c6" />

06-
<br>
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/a5ae5fe9-1e17-448f-b4d0-d55a236183f8" />

07-
<br>
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/756bba0f-5c1a-4ffa-bbd3-007f8ccde1a9" />

08/09-
<br>
<img width="431" height="321" alt="image" src="https://github.com/user-attachments/assets/b9dc1b8a-8df1-4489-bf49-472827d352dc" />

10-
<br>
<img width="438" height="133" alt="image" src="https://github.com/user-attachments/assets/26eb9ac9-80e3-4c09-bb94-65872cd412c7" />

11-
<br>
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/8ac13200-91d7-4eec-b801-3680e7deab50" />

12-
<br>
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/82732250-f351-4bfa-90c4-e91d1dfb4a75" />


13-
<br>
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/fbc4943a-45a7-46bb-b9ef-1f3b9f003a43" />

14-
<br>
<img width="503" height="453" alt="image" src="https://github.com/user-attachments/assets/0de92359-123a-4259-b717-5b8edc93339d" />

15-
<br>
<img width="2880" height="1800" alt="image" src="https://github.com/user-attachments/assets/b0d4a143-b41b-474c-b2b3-d45839e9d6a8" />

## 🚀 Funcionalidades Técnicas
- **Navegação Híbrida:** Combinação de `Native Stack Navigation` e `Bottom Tab Navigation`.
- **Gerenciamento de Estado:** Context API para controle de **Autenticação**, **Carrinho** e **Temas (Dark/Light)**.
- **Suporte Multiplataforma:** Componentes condicionais para Mobile e Web (ex: Mapas).
- **Notificações:** Serviço de notificação local para confirmação de pedidos (via `notificationService`).
- **Persistência:** Uso de `AsyncStorage` para manter a sessão do usuário ativa.
  
## 🛠️ Tecnologias Utilizadas
- React Native / Expo
- React Navigation
- Expo Maps
- Context API
- Ionicons

## 📦 Como executar o projeto
1. Clone este repositório:
   ```bash
   git clone [https://github.com/brennomachado2003/InfnetFood.git](https://github.com/brennomachado2003/InfnetFood.git)
