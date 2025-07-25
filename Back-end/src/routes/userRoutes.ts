import { FastifyInstance } from "fastify";
import { cadastroUser, loginUser } from "../controllers/userControlle";
import { authGuard } from "../middleware/auth";

export async function userRoutes(app: FastifyInstance) {
    app.post('/', cadastroUser);
    app.post('/login',loginUser);
};