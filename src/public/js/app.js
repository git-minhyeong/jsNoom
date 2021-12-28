// const socket = new WebSocket("ws://localhost:3000");
const socket = new WebSocket(`ws://${window.location.host}`);
// 여기서의 소켓은 서버로의 연결

socket.addEventListener("open", () => {
    console.log("Connected to Server V");
});

socket.addEventListener("message", (message) => {
    console.log("New message: ", message);
});

socket.addEventListener("close", () => {
    console.log("Connected from Server X");
});

setTimeout(() => {
    socket.send("Hello from the browser!");
}, 10000);