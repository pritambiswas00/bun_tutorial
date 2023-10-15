import { textSync } from "figlet";
const server = Bun.serve({
    port:3000,
    fetch: async (request:Request) =>{
        const path = new URL(request.url);
        switch(path.pathname){
              case "/":
                 return new Response(textSync("Main Root"));
              case "/user":
                 return new Response(textSync("new User"))
              default:
                return new Response(textSync("Error"))
        }
    }
}
)
console.log(`Server is started on port:: ${server.port}`);