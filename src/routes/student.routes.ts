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

    fastify.get('/', async (req, reply) => {
        try {
            const data = await studentUseCase.listAllStudents()
            reply.send(data)
        } catch (error) {
            reply.send(error)
        }
    })

    fastify.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
        const { id } = req.params
        try {
            const data = await studentUseCase.delete(id)
            return reply.send(data)
        } catch (error) {
            reply.send(error)
        }
    })
}