import { FastifyInstance } from "fastify";
import { CreateUser } from "../controllers/userControlle";


export async function userRoutes(app: FastifyInstance) {
    app.post('/', CreateUser);
};