// socket io connection
const socket = io();

// variables
const inputEl = document.querySelector(".input-element");
let chatArea = document.querySelector(".chat-section .area");
const form = document.querySelector("form");
let userName = "You";


// socket code
console.log("Trying to connect......");

socket.on("connect", ()=>{
    console.log("connected: ",socket.id );
    userName = socket.id;
})

function printMessage(userName, data){
    const div = document.createElement("div")
    div.classList.add("message");
    div.innerText = `${userName.slice(0,4)}: ${data}`;
    chatArea.appendChild(div);
}

// getting all messages from server
let messages = [];
socket.on("receive-message", (data)=>{
    messages = data;
    chatArea.innerHTML = "";
    for(let i = 0; i<messages.length; i++){
        const user = messages[i].socketId;
        const message = messages[i].message;
        printMessage(user, message);
    }
})


// web code
document.addEventListener("submit", (e)=>{
    e.preventDefault();
    socket.emit("send-message", inputEl.value);
    inputEl.value = "";
})