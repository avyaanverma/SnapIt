
// variables
let userName = document.querySelector("#username");
const message = document.querySelector("#message");
let chatArea = document.querySelector(".chat-section .area");
const form = document.querySelector("form");
const connBtn = document.querySelector("#connect");


function showNotification(message, type="info"){
    let color = "#3498db";
    if(type === "success") color = "#2ecc71";
    if(type === "error") color = "#e74c3c";
    if(type === "warning") color = "#f39c12";

    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        close: true,
        style: {
            background: color,
        }
    }).showToast();
}

function printMessage(userName, data){
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerText = `${userName}: ${data}`;
    chatArea.appendChild(div);
}




let socket = null;
let connected = false;
connBtn.addEventListener("mousedown", (e)=>{
    e.preventDefault();
    if(!userName.value) return;
    connected = !connected;
    console.log(connected);
    if(connected){
        // socket io connection
        if(!socket){
            socket = io();
        }
        // socket code
        console.log("Trying to connect......");

        socket.on("connect", ()=>{
            console.log("connected: ",socket.id);
            socket.emit("register-user", userName.value);
        });

        socket.on("user:joined", (data)=>{
            showNotification(data);
        });

        socket.on("user:left", (data)=>{
            showNotification(data, type ="error");
        })

        // getting all messages from server
        let messages = [];
        socket.on("chat:receive", (data)=>{
            messages = data;
            chatArea.innerHTML = "";
            for(let i = 0; i<messages.length; i++){
                console.log(messages[i]);
                const message = messages[i].message;
                printMessage(messages[i].username, message);
            }
        })

                // web code
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            if(!userName.value.trim()) {
                alert("Please Enter Username");
                return;
            }
            if(!message.value.trim()) {
                alert("Please Enter Message");
                return;
            }

            const messageVal = message.value;
            const userNameVal = userName.value;

            socket.emit("chat:send", {userNameVal, messageVal});
            message.value = "";
        })


    }

})