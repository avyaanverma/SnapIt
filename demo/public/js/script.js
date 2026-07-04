// socket io connection
const socket = io();

// variables
let userName = document.querySelector("#username");
const message = document.querySelector("#message");
let chatArea = document.querySelector(".chat-section .area");
const form = document.querySelector("form");

// socket code
console.log("Trying to connect......");

socket.on("connect", ()=>{
    console.log("connected: ",socket.id);
})

function printMessage(userName, data){
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerText = `${userName}: ${data}`;
    chatArea.appendChild(div);
}

// getting all messages from server
let messages = [];
socket.on("receive-message", (data)=>{
    messages = data;
    chatArea.innerHTML = "";
    for(let i = 0; i<messages.length; i++){
        const message = messages[i].message;
        printMessage(messages[i].userName, message);
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

    socket.emit("send-message", {userNameVal, messageVal});
    message.value = "";
})