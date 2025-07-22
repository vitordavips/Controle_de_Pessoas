import { prisma } from "../lib/prisma-client";
import { FastifyRequest, FastifyReply } from "fastify";
import { ICreateUser, ILoginUser } from "../interfaces/user-interface";
import * as bcrypt from 'bcrypt';

// criar cadastro
export async function cadastroUser(request: FastifyRequest, reply: FastifyReply) {
    const {nome, email, senha} = request.body as ICreateUser;

    try {
        //verificar se o usuario existe
        const existiuser = await prisma.users.findUnique({where:{email:email}});

        if(existiuser){
            return reply.status(401).send({message:"e-mail já cadastro"});
        };

        //criptografia
        const hashSenha = await bcrypt.hash(senha, 10);

        const user = await prisma.users.create({
            data: {
                nome, 
                email, 
                senha: hashSenha
            }
        });

        return reply.status(200).send({
            id: user.id,
            nome: user.nome,
            email: user.email,
            senha: user.senha
        })
    } catch (error) {
        return reply.status(500).send({error: "Erro ao cadastrar o usuário"})
    }
};

// login
export async function loginUser(request: FastifyRequest, reply: FastifyReply) {
    const {email, senha} = request.body as ILoginUser;

    try {
        const user = await prisma.users.findUnique({where:{email: email}});

        if(!user){
            return reply.status(401).send({message:"email ou senha inválidos"})
        };

        const senhaValidade = await bcrypt.compare(senha, user.senha)
        if(!senhaValidade){
            return reply.status(401).send({message:"email ou senha inválidos"})
        };

        return reply.status(200).send({message: "Login realizado com sucesso!", user});
    } catch (error) {
        console.error("Erro no Login:", error);
        return reply.status(500).send({message: "Erro interno"})
    };
};


