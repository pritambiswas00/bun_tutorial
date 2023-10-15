import { textSync } from "figlet";
const server = Bun.serve({
    port:3000,
    fetch: async (request:Request) =>{
        const body = textSync("From Bun")
        return new Response(body)
    }
}
)
console.log(`Server is started on port:: ${server.port}`);