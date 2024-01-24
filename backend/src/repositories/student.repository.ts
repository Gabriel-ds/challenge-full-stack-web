import { prisma } from '../database/prisma-client';
import { Studant, StudantCreate, StudantRepository } from '../interfaces/studants.interface';

class StudantRepositoryPrisma implements StudantRepository {
    async create(data: StudantCreate): Promise<Studant> {
        const result = await prisma.studant.create({
            data: {
                name: data.name,
                cpf: data.cpf,
                ra: data.ra,
            },
        });
        return result;
    }

    async listAllStudants(): Promise<Studant[]> {
        const result = await prisma.studant.findMany()
        return result
    }

    async updateStudant({ id, cpf, name, ra }: Studant): Promise<Studant> {
        const result = await prisma.studant.update({
            where: { id },
            data: { cpf, name, ra }
        })
        return result
    }

    async delete(id: string): Promise<Studant> {
        const result = await prisma.studant.delete({
            where: {
                id
            }
        })
        return result
    }
}

export { StudantRepositoryPrisma };

