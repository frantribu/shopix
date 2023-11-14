import { Server } from "socket.io";

export default function Sockets(req, res) {
    if(res.socket.server.io) {
        console.log("Conexion configurada")
        res.end()
        return
    }

const io = new Server(res.socket.server) 
res.socket.server.io = io

io.on("connection", (socket) => {
    console.log(`Se conecto un usuario en el socket ${socket.id}`)

    socket.on("chat:mensaje", (mensaje) => {
        io.emit("chat:mensaje",  mensaje)
    })
})

console.log("Conectando socket")
res.end()
}