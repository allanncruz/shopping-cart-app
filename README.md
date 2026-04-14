# GT League App

Projeto prático desenvolvido com **React Native + Expo Router** com objetivo de demonstrar consumo de API, navegação, estado global e arquitetura escalável.

---

## 📱 Funcionalidades

* Listagem de produtos via API pública
* Tela de detalhe do produto
* Carrinho global com contador no header
* Adicionar e remover itens do carrinho
* Cálculo de total do carrinho
* Header global reutilizável
* Navegação com rotas dinâmicas
* Estrutura modular (services, types, components, context)

---

## 🧠 Conceitos aplicados

* React Native
* Expo Router (file based routing)
* Context API (estado global)
* Consumo de API com fetch
* Tipagem com TypeScript
* Componentização reutilizável
* Separação de responsabilidades
* Arquitetura escalável para apps mobile

---

## 📂 Estrutura do projeto

```
src/
 ├── app/
 │    ├── index.tsx
 │    ├── product/
 │    │     └── [id].tsx
 │    └── cart/
 │          └── index.tsx
 │
 ├── components/
 │    ├── ProductCard.tsx
 │    └── Header.tsx
 │
 ├── context/
 │    └── CartContext.tsx
 │
 ├── services/
 │    ├── config.ts
 │    └── productApi.ts
 │
 └── types/
      └── product.ts
```

---

## 🚀 Como rodar o projeto

### 1. Clonar repositório

```
git clone https://github.com/allanncruz/gt-league-app.git
```

### 2. Entrar na pasta

```
cd gt-league-app
```

### 3. Instalar dependências

```
npm install
```

ou

```
yarn
```

### 4. Rodar projeto

```
npx expo start
```

### 5. Executar no Android

Pressione:

```
a
```

Ou com emulator já aberto:

```
npx expo start --android
```

---

## 📱 Requisitos de desenvolvimento

* Node.js >= 18
* npm ou yarn
* Android Studio instalado
* Emulator Android configurado
* Expo CLI (via npx)

---

## 🔧 Ambiente utilizado

* React Native
* Expo
* Expo Router
* TypeScript
* Android Studio
* VSCode

---

## 🌐 API utilizada

```
https://fakestoreapi.com/products
```

Endpoints:

* Listagem: `/products`
* Detalhe: `/products/:id`

---

## 🛒 Fluxo do carrinho

1. Usuário adiciona produto
2. Context armazena item
3. Header atualiza contador
4. Tela cart lista itens
5. Total é calculado dinamicamente

---

## 📌 Recursos implementados

* Header global reutilizável
* Badge contador do carrinho
* Navegação dinâmica por ID
* Tela de detalhe com fetch
* Loading state
* FlatList otimizada
* Context API global
* Arquitetura modular

---

## 💡 Melhorias futuras

* Persistência com AsyncStorage
* Quantidade por item
* Tela de checkout
* Testes unitários
* React Query
* Skeleton loading
* Dark mode
* Tabs navigation

---

## 👨‍💻 Autor

Projeto desenvolvido como estudo prático de React Native.

---

## 📄 Licença

Uso livre para fins de estudo.
