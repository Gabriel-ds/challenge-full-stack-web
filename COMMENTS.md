# Comentários Adicionais

## Backend: Decisões e Observações

### Decisão da Arquitetura Utilizada

Optou-se por uma arquitetura que segue os princípios de separação de responsabilidades. O uso do Prisma para interação com o banco de dados proporciona uma camada de persistência eficiente, enquanto as classes de caso de uso contidas em `src/usecases/student.usecases.ts` gerenciam a lógica de negócios de forma organizada e modular.

### Bibliotecas de Terceiros Utilizadas

- **Prisma:** Utilizado para interação eficiente com o banco de dados MySQL, proporcionando uma camada de abstração e simplificando operações CRUD.
- **Fastify:** Framework web escolhido para a construção do servidor. Rápido, eficiente e fácil de usar, proporcionando um ambiente robusto para o desenvolvimento das rotas.

- **Jest:** Utilizado para a criação e execução dos testes unitários em `src/usecases/student.usecase.test.ts`.

- **Axios:** Biblioteca para realizar requisições HTTP. Pode ser utilizado para comunicação com APIs externas ou serviços web.

### Melhorias Se Tivesse Mais Tempo

Se houvesse mais tempo disponível, algumas melhorias poderiam ser implementadas:

- **Autenticação e Autorização:** Adição de uma camada de autenticação para garantir a segurança da aplicação, especialmente em operações sensíveis.

- **Manuseio de Erros Aprimorado:** Melhorar o tratamento de erros em todo o código, incluindo mensagens mais informativas e respostas adequadas às requisições.

- **Padrões de Logging:** Implementação de logs para monitorar e rastrear atividades importantes na aplicação.

- **Documentação de API:** Criação de documentação detalhada para a API, utilizando o Swagger.


## Frontend: Decisões e Observações

### Decisão da Arquitetura Utilizada

Optou-se por uma abordagem frontend utilizando o framework Vue.js e Vuetify, devido à sua flexibilidade e facilidade de integração com a API do backend.
### Bibliotecas de Terceiros Utilizadas

- **Vue.js:** O framework Vue.js foi escolhido para a construção da interface do usuário, proporcionando uma experiência de desenvolvimento declarativa e reativa.

- **Vuetify (v3.0.0):** Utilizado para criar uma interface de usuário atraente e consistente. Vuetify oferece uma variedade de componentes Vue pré-projetados e temas para facilitar o desenvolvimento.

- **Axios (v1.6.7):** Mantendo a consistência com o backend, a biblioteca Axios é utilizada para realizar requisições HTTP, facilitando a comunicação entre o frontend e o backend.

- **Maska (v2.1.11):** Adotada para a aplicação de máscaras em campos de entrada, como CPF e RA, proporcionando uma melhor experiência ao usuário.

- **Vue Toast Notification (v3.1.2):** Introduzida para exibir notificações leves e elegantes na aplicação, fornecendo feedback visual ao usuário.

### Melhorias Se Tivesse Mais Tempo

Se houvesse mais tempo disponível, algumas melhorias poderiam ser implementadas no frontend:

- **Componentização:** Refatoração da aplicação para uma estrutura de componentes mais modular, utilizando composição e reutilização eficiente de componentes em diferentes partes da aplicação. Isso facilitaria a manutenção, escalabilidade e entendimento do código.
  
- **Autenticação e Autorização:** Adição de uma camada de autenticação para garantir a segurança da aplicação, especialmente em operações sensíveis.

- **Melhorias na Interface de Usuário:** Aprimoramento da interface de usuário com animações, transições e otimizações visuais.

- **Gerenciamento de Estado:** Implementação de um gerenciamento de estado mais avançado, possivelmente utilizando Vuex, para facilitar o compartilhamento de dados entre componentes.

- **Testes Automatizados no Frontend:** Desenvolvimento e execução de testes automatizados no frontend para garantir a integridade e funcionalidade da aplicação.

- **Documentação Detalhada:** Elaboração de uma documentação detalhada para os componentes e serviços, facilitando a manutenção e compreensão do código.


# Requisitos Obrigatórios Não Entregues

Todos os requisitos obrigatórios foram implementados conforme especificado no desafio. Cada funcionalidade solicitada, desde o cadastro até a exclusão de alunos, foi implementada de acordo com os critérios de aceitação.

#

### Para mais informações sobre a documentação acesse o arquivo README.md.
