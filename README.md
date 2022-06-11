<div align="center">

# FEEDGET - Feedback Widget

> Desenvolvimento fullstack de uma aplicação Web/Mobile
</div>



<h1 align="center">
    <img alt="feedget" title="feedget" src=".github/logo.png" width="45%"/>
</h1>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-o-projeto">Rodando o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
</p>

<p align="center">
  <img alt="Proffy" src=".github/mockup.png">
</p>

## 👨🏻‍💻 Sobre O projeto

O FEEDGET é um Widget para envio de Feedbacks reportando bugs em uma aplicação Web e/ou Mobile.

## 🚀 Tecnologias:

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Vitejs](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)

## 💻 Rodando o projeto:

**Siga os passos abaixo**

### Server

```bash
# Da raíz do projeto, acesse a pasta 'server'.
$ cd server
# Instale as dependências.
$ npm install
# Configure suas variáveis de ambiente.
$ .env
# Com o PostgreSQL rodando, execute as migrations
$ npx prisma migrate dev
# Start o servidor
$ npm run dev
```

### Web

**Garanta que o servidor esteja rodando**

```bash
# Da raíz do projeto, acesse a pasta 'web'.
$ cd web
# Instale as dependências.
$ npm install
# Configure suas variáveis de ambiente.
$ .env
# Start a aplicação
$ npm run dev
```

### Mobile

**Garanta que o servidor esteja rodando**

```bash
# Da raíz do projeto, acesse a pasta 'mobile'.
$ cd mobile
# Instale as dependências.
$ npm install
# If you are going to emulate with android, run this command
# Se estiver no emulador android, execute
$ npm run android
# e estiver no emulador IOS, execute
$ npm run ios
# Ou só inicie o bundle
$ npm run start
```

## 👨‍🏫 Como contribuir:

-  Faça um fork do projeto;
-  Crie uma nova branch, exemplo: `git checkout -b my-feature`;
-  Commit as modificações, exemplo: `git commit -m 'feat: My new feature'`;
-  Faça um push para a sua branch: `git push origin my-feature`;


Desenvolvido por 🧗‍♂️&nbsp; Manfrinne Ferreira 🥇 [Contato](https://www.linkedin.com/in/manfrinne-ferreira-6033121a7/) - Bootcamp Rocketseat
