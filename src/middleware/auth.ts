import { FastifyReply, FastifyRequest } from "fastify";
import {verify} from 'jsonwebtoken';
import { ILoginUser } from "../interfaces/user-interface";

const jwtSegredo = process.env.JWT_SECRET!;

export async function authGuard(request:FastifyRequest, reply:FastifyReply) {
    const authHeader = request.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    try {
        //verifica se o cabeçalho existe
        if(!authHeader){
            return reply.status(401).send({message: 'Token de autentificação ausente'});
        };

        // verifica se o token existe
        if(!token){
            return reply.status(401).send({message: 'Token inválido'})
        };

        // verifica se o token é valido
        const decored = verify(token, 'jwtSegredo') as ILoginUser;

    } catch (error) {
        return reply.status(401).send({message: 'Token inválido'});
    };
};






