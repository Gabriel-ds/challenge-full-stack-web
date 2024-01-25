import { StudantCreate } from "../interfaces/studants.interface";

export function validateStudentData({ name, cpf, ra }: StudantCreate): void {
    if (!name || !cpf || !ra) {
        throw new Error('Todos os campos são obrigatórios.');
    }

    if (typeof cpf !== 'string') {
        throw new Error('CPF inválido.');
    }

    if (typeof ra !== 'number') {
        throw new Error('RA inválido.');
    }
}