import { Studant, StudantCreate, StudantRepository } from '../interfaces/studants.interface';
import { StudantRepositoryPrisma } from '../repositories/student.repository';

class StudentUseCase {
    private studentRepository: StudantRepository;
    constructor() {
        this.studentRepository = new StudantRepositoryPrisma();
    }

    async create({ name, cpf, ra }: StudantCreate): Promise<Studant> {
        const result = await this.studentRepository.create({ name, cpf, ra });

        return result;
    }
}

export { StudentUseCase };

