# Biblioteca - Sistema de Gerenciamento de Livros

## Descrição

Esta aplicação é um sistema de gerenciamento de livros que permite cadastrar livros, gerenciar o estoque com entradas e saídas, e visualizar um histórico de transações. A aplicação utiliza Node.js com Express para o backend, Sequelize para ORM e SQLite como banco de dados. As páginas são renderizadas utilizando EJS.

## Funcionalidades

- **Home**: Exibe uma lista paginada de livros cadastrados com suas quantidades em estoque.
- **Cadastro**: Permite o cadastro de novos livros.
- **Movimentações**: Permite gerenciar entradas e saídas de livros, além de exibir um histórico de transações.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- SQLite
- EJS
- CSS

## Requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)

## Instalação e Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/biblioteca.git
   cd biblioteca
   npm install
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   npm start
   ```
