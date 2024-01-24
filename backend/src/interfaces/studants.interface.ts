export interface Studant {
    id: string;
    name: string;
    ra: number;
    cpf: string
}

export interface StudantCreate {
    name: string;
    ra: number;
    cpf: string;
}
export interface StudantRepository {
    create(data: StudantCreate): Promise<Studant>;
    findByCpfOrRa(cpf: string, ra: number): Promise<Studant | null>
    listAllStudants(): Promise<Studant[]>;
    updateStudant({ id, cpf, name, ra }: Studant): Promise<Studant>;
    delete(id: string): Promise<Studant>;
}
