import createApp from "./src/app.js";
import { Server } from "socket.io";
import {createServer} from "http";

function startServer(){
    const app = createApp();
    const httpServer = createServer(app);

    // storing messages in array
    const messages = [];

    // storing users in map
    const users = new Map();

    const io = new Server(httpServer);
    io.on("connection", (socket)=>{
        console.log("Client Connected.");
        socket.emit("welcome", "Welcome to the chat!");
        socket.emit("chat: receive", messages);
        
        socket.on("register-user", (data)=>{
            socket.username = data;
            users.set(socket.id, {
                username: socket.username
            })
            io.emit("user:joined", `🟢 ${socket.username} joined the chat`);        
        })
        
        
        socket.on("chat:send", (data)=>{
            messages.push({
                socketId: socket.id,
                username: socket.username,
                message: data.messageVal
            });
            // io => broadcast messages
            io.emit("chat:receive", messages);
        })
        
        socket.on("disconnect", (reason)=>{
            console.log("Client Disconnected.");
            if(socket){
                io.emit("user:left", `🟠 ${socket.username} left the chat`);
            }
        })
    });


    httpServer.listen(3000, ()=>{
        console.log("Server is running on http://localhost:3000");
    });
}

startServer();