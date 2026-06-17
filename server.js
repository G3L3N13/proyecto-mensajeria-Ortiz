const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const usuarios = [];

app.use(express.static(path.join(__dirname, "public")));

function emitirUsuarios() {
    io.emit("usuarios-conectados", usuarios);
}

function buscarUsuario(socketId) {
    return usuarios.find((u) => u.id === socketId);
}

io.on("connection", (socket) => {
    console.log("Conectado:", socket.id);

    const usuario = {
        id: socket.id,
        nombre: "Sin nombre",
        ip: socket.handshake.address,
        horaConexion: new Date().toLocaleTimeString()
    };

    usuarios.push(usuario);
    emitirUsuarios();

    socket.on("registrar", (nombre) => {
        const usuarioActual = buscarUsuario(socket.id);

        if (usuarioActual) {
            usuarioActual.nombre = nombre || "Sin nombre";
        }

        emitirUsuarios();

        io.emit("mensaje-sistema", {
            texto: `${usuarioActual.nombre} se registró`,
            hora: new Date().toLocaleTimeString()
        });
    });

    socket.on("mensaje-global", (texto) => {
        const emisor = buscarUsuario(socket.id);
        if (!emisor) return;

        io.emit("mensaje-global", {
            de: emisor.nombre,
            ip: emisor.ip,
            texto: texto,
            hora: new Date().toLocaleTimeString()
        });
    });


    socket.on("mensaje-privado", (data) => {
        const emisor = buscarUsuario(socket.id);
        const destino = usuarios.find((u) => u.ip === data.ipDestino);
        if (!emisor || !destino) return;
        io.to(destino.id).emit("mensaje-privado", {
            de: emisor.nombre,
            ipEmisor: emisor.ip,
            texto: data.texto,
            hora: new Date().toLocaleTimeString()
        });
    });



    socket.on("disconnect", () => {
        const indice = usuarios.findIndex((u) => u.id === socket.id);

        if (indice !== -1) {
            const desconectado = usuarios[indice];
            usuarios.splice(indice, 1);

            io.emit("mensaje-sistema", {
                texto: `${desconectado.nombre} se desconectó`,
                hora: new Date().toLocaleTimeString()
            });
        }

        emitirUsuarios();
    });
});

server.listen(3000, () => {
    console.log("Servidor activo en http://localhost:3000");
});
