import { prisma } from "../lib/prisma-client";
import { FastifyRequest, FastifyReply } from "fastify";
import { ICreateUser, ILoginUser } from "../interfaces/user-interface";

// criar usuário
export async function CreateUser(request: FastifyRequest, reply: FastifyReply) {
    const {nome, email, senha} = request.body as ICreateUser;

    try {
        const existiuser = await prisma.user.findUnique({where: {email}});
        if(existiuser){
            return reply.status(401).send({message:"e-mail já cadastro"});
        }

        const user = await prisma.user.Create({
            data: {nome, email, senha}
        })

        return reply.status(200).send({
            id: user.id,
            nome: user.nome,
            email: user.email
        })
    } catch (error) {
        return reply.status(500).send({error: "Erro ao cadastrar o usuário"})
    }
}




