# MiniBlog

MiniBlog é uma aplicação React construída com Vite para prática de desenvolvimento de blog simples com autenticação Firebase.

## O que esta aplicação faz

- Cadastro de usuário com e-mail e senha usando Firebase Authentication
- Login de usuário com tratamento de erro e feedback visual
- Navegação entre páginas públicas e privadas com `react-router-dom`
- Rotas protegidas para criação de posts e área de dashboard
- Layout básico com `Navbar` e `Footer`

## Páginas existentes

- `/` - Home
- `/about` - Sobre o projeto
- `/login` - Formulário de login
- `/register` - Formulário de cadastro
- `/posts/create` - Área restrita para criação de posts
- `/dashboard` - Área restrita do usuário

## Principais tecnologias

- React 19
- Vite
- React Router Dom
- Firebase Authentication
- Firestore (configurado no projeto)
- ESLint

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Scripts úteis

- `npm run dev` - inicia o servidor de desenvolvimento
- `npm run build` - gera o build de produção
- `npm run preview` - serve o build de produção localmente
- `npm run lint` - executa o ESLint no projeto

## Estrutura do projeto

- `src/App.jsx` - configuração de rotas e autenticação global
- `src/components/Navbar.jsx` - navegação principal
- `src/components/Footer.jsx` - rodapé do site
- `src/context/AuthContext.jsx` - contexto de autenticação
- `src/hooks/useAuthentication.jsx` - lógica de login, cadastro e logout
- `src/firebase/config.js` - configuração do Firebase
- `src/pages/` - páginas principais do MiniBlog

## Observações

A aplicação já possui a base de autenticação e rotas protegidas implementadas. As páginas de criação de post e dashboard estão estruturadas como placeholders e podem ser estendidas com recursos de postagem e listagem.

---


