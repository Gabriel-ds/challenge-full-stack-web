# Comentários Adicionais

## Decisões e Observações

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

### Requisitos Obrigatórios Não Entregues

Todos os requisitos obrigatórios foram implementados conforme especificado no desafio. Cada funcionalidade solicitada, desde o cadastro até a exclusão de alunos, foi implementada de acordo com os critérios de aceitação.
