import { Studant, StudantCreate, StudantRepository } from '../interfaces/studants.interface';
import { StudantRepositoryPrisma } from '../repositories/studant.repository';
import { validateStudentData } from './validationsUtils';

class StudentUseCase {
    private studentRepository: StudantRepository;
    constructor() {
        this.studentRepository = new StudantRepositoryPrisma();
    }

    async create({ name, cpf, ra }: StudantCreate): Promise<Studant> {
        validateStudentData({ cpf, name, ra })
        const verifyExistStudant = await this.studentRepository.findByCpfOrRa(cpf, ra)
        if (verifyExistStudant) {
            throw new Error('Estudante já existe.');
        }

        const result = await this.studentRepository.create({ name, cpf, ra });
        return result;
    }

    async listAllStudants(): Promise<Studant[]> {
        const result = await this.studentRepository.listAllStudants()
        return result
    }

    async updateStudant({ id, cpf, name, ra }: Studant) {
        const result = await this.studentRepository.updateStudant({
            id,
            cpf,
            name,
            ra
        })
        return result
    }

    async delete(id: string) {
        const result = await this.studentRepository.delete(id)
        return result
    }
}

export { StudentUseCase };

