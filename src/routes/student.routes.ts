import { FastifyInstance } from 'fastify';
import { StudantCreate } from '../interfaces/studants.interface';
import { StudentUseCase } from '../uses-cases/studant.usecases';

export async function studentRoutes(fastify: FastifyInstance) {
    const studentUseCase = new StudentUseCase()

    fastify.post<{ Body: StudantCreate }>('/', async (req, reply) => {
        const { cpf, name, ra } = req.body
        try {
            const data = await studentUseCase.create({
                name,
                cpf,
                ra
            })
            return reply.send(data)
        } catch (error) {
            reply.send(error)
        }
    })

    fastify.get('/', (req, reply) => {
        reply.send({ hello: 'world' })
    })
}