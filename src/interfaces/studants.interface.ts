export interface Studant {
    id: string;
    name: string;
    ra: number;
    cpf: string
    createdAt: Date;
    updatedAt: Date;
}

export interface StudantCreate {
    name: string;
    ra: number;
    cpf: string;
}
export interface StudantRepository {
    create(data: StudantCreate): Promise<Studant>;
}
