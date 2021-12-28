const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");


// const socket = new WebSocket("ws://localhost:3000");
const socket = new WebSocket(`ws://${window.location.host}`);
// 여기서의 소켓은 서버로의 연결

function handleOpen() {
    console.log("Connected to Server V");
}

socket.addEventListener("open", handleOpen);

// socket.addEventListener("open", () => {
//     console.log("Connected to Server V");
// });

socket.addEventListener("message", (message) => {
    console.log("New message: ", message);
});

socket.addEventListener("close", () => {
    console.log("Connected from Server X");
});

// setTimeout(() => {
//     socket.send("Hello from the browser!");
// }, 10000);

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    // console.log(input.value);
    socket.send(input.value);
    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);