+A Educação - Full Stack Web Developer
===================

[![N|Solid](https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg)](https://maisaedu.com.br/) 

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

- ``getStudants:`` Obter a lista de estudantes.
- ``createStudant:`` Criar um novo estudante.
- ``deleteStudant:`` Excluir um estudante.
- ``updateStudant:`` Atualizar informações de um estudante.


## Instruções para Execução e Testes

1. **Instalação de Dependências:** Execute npm install para instalar as dependências necessárias.
2. **Execução em Modo de Desenvolvimento:** Execute npm run dev para iniciar o servidor de desenvolvimento Vite.



Esta documentação fornece uma visão geral do frontend da aplicação, detalhando as tecnologias utilizadas, a estrutura do projeto, as bibliotecas empregadas e instruções para execução e testes.
