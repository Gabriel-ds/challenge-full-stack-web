import Fastify from 'fastify';

const app = Fastify();

app.listen({ port: 3100 }, () => {
    console.log('----- Server listening on port 3100 -----');
});