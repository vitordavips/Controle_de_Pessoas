export interface ICreateUser{
    id?: number;
    nome: string;
    email: string;
    senha: string;
};

export interface ILoginUser{
    email: string;
    senha: string;
};
