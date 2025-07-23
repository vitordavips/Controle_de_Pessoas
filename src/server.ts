import dotenv from 'dotenv';
import fastify from "fastify";
import { userRoutes } from "./routes/userRoutes";

const app = fastify();

dotenv.config();


app.register(userRoutes);

//teste api
app.get('/', ()=>{
    return 'servidor ok!'
})


// servidor
app.listen({ port:3000 }).then(() => {
    console.log("servidor rodando!")
});