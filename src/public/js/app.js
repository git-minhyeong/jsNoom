const socket = io();

// ws용 코드
// const messageList = document.querySelector("ul");
// const messageForm = document.querySelector("#message");
// const nickForm = document.querySelector("#nick");

// // const socket = new WebSocket("ws://localhost:3000");
// const socket = new WebSocket(`ws://${window.location.host}`); // 이것은 socketIo와 호환되진 않음... 그래서 socketio url을 통해 클라이언트가 임포트함.
// // 여기서의 소켓은 서버로의 연결

// function makeMessage(type, payload) {
//     const msg = {type, payload};
//     return JSON.stringify(msg);
// }
// // 백엔드는 스트링으로 받는다
// // 왜냐면 frontend는 여러 언어일 수 있기도 하고...
// // 백엔드에서는 다시 오브젝트로 바꿔줘야겠지

// function handleOpen() {
//     console.log("Connected to Server V");
// }

// socket.addEventListener("open", handleOpen);

// // socket.addEventListener("open", () => {
// //     console.log("Connected to Server V");
// // });

// socket.addEventListener("message", (message) => {
//     // console.log("New message: ", message);
//     const li = document.createElement("li");
//     li.innerText = message.data;
//     messageList.append(li);
// });

// socket.addEventListener("close", () => {
//     console.log("Connected from Server X");
// });

// // setTimeout(() => {
// //     socket.send("Hello from the browser!");
// // }, 10000);

// function handleSubmit(event) {
//     event.preventDefault();
//     const input = messageForm.querySelector("input");
//     // console.log(input.value);
//     socket.send(makeMessage("new_message", input.value));
//     const li = document.createElement("li");
//     li.innerText = message.data;
//     // li.innerText = `You: ${message.data}`;

//     messageList.append(li);
//     input.value = "";
// }

// function handleNickSubmit(event) {
//     event.preventDefault();
//     const input = nickForm.querySelector("input");
//     // socket.send(input.value); // 이러면 메시지로 보내지고... 메시지 종류 분할 필요
//     // JSON으로 보내자
//     // socket.send({
//     //     type:"nickname",
//     //     payload:input.value,
//     // });
//     socket.send(makeMessage("nickname", input.value));
//     input.value = "";
// }

// messageForm.addEventListener("submit", handleSubmit);
// nickForm.addEventListener("submit", handleNickSubmit);