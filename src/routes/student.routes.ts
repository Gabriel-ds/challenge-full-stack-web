import { FastifyInstance } from 'fastify';
import { StudentUseCase } from '../uses-cases/studant.usecases';

export async function studentRoutes(fastify: FastifyInstance) {
    const studentUseCase = new StudentUseCase()

    fastify.get('/', (req, reply) => {
        reply.send({ hello: 'world' })
    })
}