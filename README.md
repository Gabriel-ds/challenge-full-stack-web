# +A Educação - Full Stack Web Developer

[![N|Solid](https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg)](https://maisaedu.com.br/)

# Documentação do Backend

## Tecnologias e Ferramentas Utilizadas

- TypeScript
- Node.js
- Prisma
- MySQL
- Fastify
- Axios

## Estrutura do Projeto

O projeto do backend está organizado em algumas pastas principais:

1. **`database`**: Contém o arquivo `schema.prisma`, que define a estrutura do banco de dados usando o Prisma.

2. **`interfaces`**: Armazena o arquivo `studants.interface.ts`, que contém as interfaces relacionadas aos estudantes.

3. **`repositories`**: Inclui o arquivo `studant.repository.ts`, que implementa a interface `StudantRepository` para interação com o banco de dados.

4. **`usecases`**: Contém o arquivo `student.usecases.ts`, que define as regras de negócios relacionadas aos estudantes, utilizando o repositório.

5. **`utils`**: Contém o arquivo `validationsUtils.ts`, que fornece funções de validação para garantir a integridade dos dados.

6. **`tests`**: Armazena o arquivo `student.usecase.test.ts`, que contém os testes unitários para as funcionalidades relacionadas aos estudantes.

7. **`server.ts`**: É o arquivo principal que configura o servidor Fastify, registra os módulos, e inicia o servidor na porta 3100.

## Prisma Schema (`database/schema.prisma`)

O arquivo `schema.prisma` define o esquema do banco de dados usando o Prisma. No momento, há uma única entidade chamada `Studant` com os campos necessários.

## Interfaces (`interfaces/studants.interface.ts`)

O arquivo `studants.interface.ts` contém as interfaces relacionadas aos estudantes. São elas:

- `Studant`: Representa um estudante com os campos `id`, `name`, `ra`, `cpf`, e `email`.
- `StudantCreate`: Interface para a criação de um novo estudante.
- `StudantUpdate`: Interface para a atualização de informações de um estudante.
- `StudantRepository`: Interface que define métodos para interação com o banco de dados.

## Repositório (`repositories/studant.repository.ts`)

O arquivo `studant.repository.ts` implementa a interface `StudantRepository` e utiliza o Prisma para interagir com o banco de dados MySQL. Fornece métodos para criar, buscar, listar, atualizar e excluir estudantes.

## Casos de Uso (`usecases/student.usecases.ts`)

O arquivo `student.usecases.ts` define a classe `StudentUseCase`, que contém métodos para criar, listar, atualizar e excluir estudantes. Esta classe lida com a lógica de negócios, validações e interage com o repositório.

## Utilitários (`utils/validationsUtils.ts`)

O arquivo `validationsUtils.ts` fornece funções de validação, como a validação de dados de estudantes.

## Testes Unitários (`tests/student.usecase.test.ts`)

O arquivo `student.usecase.test.ts` contém testes unitários para garantir a funcionalidade correta dos métodos definidos na classe `StudentUseCase`. Utiliza uma classe de repositório mock para simular a interação com o banco de dados.

## Servidor (`server.ts`)

O arquivo `server.ts` configura o servidor Fastify, registra os módulos relacionados aos estudantes, e inicia o servidor na porta 3100.

## Instruções para Execução e Testes

1. **Instalação de Dependências:** Entre na pasta `backend` e execute `npm install` para instalar as dependências necessárias.

2. **Configuração do Banco de Dados com Docker:** Execute o comando `docker compose up` para subir o banco de dados MySQL.

3. **Gerar tabela do banco de dados**: Execute o comando `npx prisma migrate dev` e depois `npx prisma generate`.

4. **Execução do Servidor:** Execute `npm run dev` para iniciar o servidor na porta 3100.

   - Utilize a collection do postman disponível no repositório para fazer as requisições.

5. **Execução dos Testes:** Execute `npm run test` para executar os testes unitários.

#

# Documentação do Frontend

<img src="https://private-user-images.githubusercontent.com/71797335/300307552-e5a5d34e-2a25-4e75-9385-336de21185ec.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY0OTAyMjMsIm5iZiI6MTcwNjQ4OTkyMywicGF0aCI6Ii83MTc5NzMzNS8zMDAzMDc1NTItZTVhNWQzNGUtMmEyNS00ZTc1LTkzODUtMzM2ZGUyMTE4NWVjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI5VDAwNTg0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJiYzcyNTFjMTgxMjc4NzJkYjY2NWRlYWJiZDI3ZDc5Y2U3NTVhOTFmNmExOTNmZjkxZWNjMTk1OWJjMjU4ZDgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Bp6zaZNjiWDRv6xU1bGqX1zR8e7x35_Cj4N8w5i1PB4">

## Tecnologias e Ferramentas Utilizadas

- **Vue.js (v3.3.0):** Um framework progressivo para construir interfaces de usuário.
- **Vuetify (v3.0.0):** Biblioteca de componentes Vue para criar interfaces de usuário ricas e atraentes.
- **Axios (v1.6.7):** Biblioteca para fazer requisições HTTP, facilitando a integração com APIs.
- **Maska (v2.1.11):** Aplicar máscaras a campos de entrada, como CPF e RA.
- **Vue Toast Notification (v3.1.2):** Exibe notificações personalizadas.

## Estrutura do Projeto

O projeto do frontend está estruturado em arquivos Vue.js principais:

1. **`frontend/src/App.vue`**: Arquivo principal do Vue.js que define a estrutura da aplicação, incluindo navegação, barra de aplicativos, consulta de alunos, formulário de edição/adicionar e a tabela de alunos.

2. **`frontend/src/services/apiStudents.js`**: Arquivo que define o serviço para realizar chamadas de API relacionadas aos estudantes, utilizando o Axios.

## Componentes Principais (frontend/src/App.vue)

O arquivo App.vue define a estrutura principal da aplicação Vue.js, incluindo:

- **Barra de Navegação**: Contendo links para Home e Alunos.
- **Consulta de Alunos:** Uma tabela que exibe os alunos e permite filtrar por nome, RA ou CPF.
- **Formulário de Edição/Adição:** Modal que permite adicionar um novo aluno ou editar um existente.
- **Integração com API:** Utilização do serviço apiStudents.js para realizar chamadas à API do backend.

## Serviço de API (frontend/src/services/apiStudents.js)

O arquivo apiStudents.js define funções para realizar chamadas à API do backend utilizando o Axios. As principais funções incluem:

- `getStudants:` Obter a lista de estudantes.
- `createStudant:` Criar um novo estudante.
- `deleteStudant:` Excluir um estudante.
- `updateStudant:` Atualizar informações de um estudante.

## Instruções para Execução e Testes

1. **Instalação de Dependências:** Execute npm install para instalar as dependências necessárias.
2. **Execução em Modo de Desenvolvimento:** Execute npm run dev para iniciar o servidor de desenvolvimento Vite.

#

Esta documentação fornece uma visão geral do frontend e backend da aplicação, detalhando as tecnologias utilizadas, a estrutura do projeto, as bibliotecas empregadas e instruções para execução e testes.
