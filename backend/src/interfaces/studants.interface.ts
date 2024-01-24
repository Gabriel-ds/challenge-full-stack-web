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
    listAllStudants(): Promise<Studant[]>;
    updateStudant({ id, cpf, name, ra }: Studant): Promise<Studant>;
    delete(id: string): Promise<Studant>;
}
