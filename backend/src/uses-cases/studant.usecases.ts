import { Studant, StudantCreate, StudantRepository } from '../interfaces/studants.interface';
import { StudantRepositoryPrisma } from '../repositories/student.repository';

class StudentUseCase {
    private studentRepository: StudantRepository;
    constructor() {
        this.studentRepository = new StudantRepositoryPrisma();
    }

    async create({ name, cpf, ra }: StudantCreate): Promise<Studant> {
        const verifyExistStudant = await this.studentRepository.findByCpfOrRa(cpf, ra)

        if (verifyExistStudant) {
            throw new Error('Studant already exists')
        }

        const result = await this.studentRepository.create({ name, cpf, ra });

        return result;
    }

    async listAllStudants(): Promise<Studant[]> {
        const result = await this.studentRepository.listAllStudants()
        return result
    }

    async updateStudant({ id, cpf, name, ra }: Studant) {
        const data = await this.studentRepository.updateStudant({
            id,
            cpf,
            name,
            ra
        })
        return data
    }

    async delete(id: string) {
        const data = await this.studentRepository.delete(id)
        return data
    }
}

export { StudentUseCase };

