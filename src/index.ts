import fastify from "fastify";

const app = fastify();

//teste api
app.get('/', ()=>{
    return 'servidor ok!'
})


// servidor
app.listen({ port:8080 }).then(() => {
    console.log("servidor rodando!")
})