+A Educação - Full Stack Web Developer
===================

[![N|Solid](https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg)](https://maisaedu.com.br/) 

# Documentação do Backend

## Tecnologias e Ferramentas Utilizadas
- TypeScript
- Node.js
- Prisma
- MySQL
- Fastify

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

1. **Configuração do Banco de Dados:** Certifique-se de que o banco de dados MySQL esteja configurado corretamente, conforme as configurações fornecidas no arquivo `database/schema.prisma`.

2. **Instalação de Dependências:** Execute `npm install` para instalar as dependências necessárias.

3. **Execução do Servidor:** Execute `npm start` para iniciar o servidor na porta 3100.

4. **Execução dos Testes:** Execute `npm test` para executar os testes unitários.
