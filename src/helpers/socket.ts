import { Server } from 'socket.io';
import { Server as HttpServer } from 'http';

let io: Server
const userSocketMap = new Map();

export const setupSocket = (server: HttpServer) => {
    io = new Server(server, {
        cors: {
            origin: process.env.Frontend_URL,
            methods: ["GET", "POST"]
        }
    });
    io.on("connect", (socket) => {
        console.log("User connected:", socket.id);
        socket.on("register", (userId) => {
            userSocketMap.set(userId, socket.id);
            console.log(`User registered: ${userId} -> Socket ID: ${socket.id}`);
        });
        socket.on("disconnect", () => {
            for (let [userId, socketId] of userSocketMap.entries()) {
                if (socketId === socket.id) {
                    userSocketMap.delete(userId);
                    console.log(`User disconnected: ${userId}`);
                    break;
                }
            }
        });
    });

}