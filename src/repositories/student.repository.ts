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
}

export { StudantRepositoryPrisma };

