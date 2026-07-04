import createApp from "./src/app.js";
import { Server } from "socket.io";
import {createServer} from "http";

function startServer(){
    const app = createApp();
    const httpServer = createServer(app);

    let messages = [];

    const io = new Server(httpServer);
    io.on("connection", (socket)=>{
        console.log("Client Connected.");
        socket.emit("welcome", "Welcome to the chat!");
        socket.emit("receive-message", messages);
        
        socket.on("send-message", (data)=>{
            messages.push({
                socketId: socket.id,
                message: data 
            });
            // io => broadcast messages
            io.emit("receive-message", messages);
        })

        socket.on("disconnect", (socket)=>{
            console.log("Client Disconnected.");
        })
    });


    httpServer.listen(3000, ()=>{
        console.log("Server is running on http://localhost:3000");
    });
}

startServer();