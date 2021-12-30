import http from "http";
// import WebSocket from "ws";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on https://localhost:3000`)
// app.listen(3000, handleListen);

// express 는 https protocol을 다루지만 ws는 wsServer Web Socket 프로토콜을 다룬다
// 합쳐보자

const httpServer = http.createServer(app); //http 서버
// const wsServer = new WebSocket.Server({ httpServer });
const wsServer = SocketIO(httpServer);
// localhost:3000/socket.io/socket.io.js

wsServer.on("connection", (socket) => {
    socket.onAny((event) => {
        console.log(`Socket Event:${event}`);
    })
    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName);
        done();
        socket.to(roomName).emit("welcome");
    });
});

// server를 굳이넣지 않아도 되지만
// 안에 server를 전달함으로써 http 서버와 WebSocket을 같이 돌릴 수 있다
// 같은 서버 같은 포트에서 http websocket을 둘 다 작동시키기 위함
// 필수는 아님, 따로 돌릴 수 있고

// function handleConnection(socket) {
//     console.log(socket);
// }
// 여기서의 소켓은 브라우저임
// wsServer.on("connection", handleConnection);
// wsServer.on("connection", (socket) => {
//     console.log(socket);
// })

function onSocketClose() {
    console.log("Disconnected from client X");
}

// function onSocketMessage(message) {
//     console.log(message.toString('utf8'));
// }

// Web Socket 기반
// const sockets = [];
// // fake database
// // 누군가 서버에 연결하면 connection을 sockets에 넣음

// wsServer.on("connection", (socket) => {
//     sockets.push(socket);
//     socket["nickname"] = "Anon";
//     console.log("Connected to Browser V");
//     socket.on("close", onSocketClose);
//     // socket.on("message", onSocketMessage);
//     socket.on("message", (msg) => {
//         const message = JSON.parse(msg);
//         switch(message.type){
//             case "new_message":
//                 // sockets.forEach(aSocket => aSocket.send(message.payload.toString('utf8')));
//                 sockets.forEach(aSocket => aSocket.send(`${socket.nickname}: ${message.payload}`)
//                 );
//                 break;
//             case "nickname":
//                 // console.log(message.payload);
//                 socket["nickname"] = message.payload;
//                 break;
//         }
//         // if (message.type === "new_message") {
//         //     sockets.forEach(aSocket => aSocket.send(message.payload.toString('utf8')));
//         // } else if (message.type === "nickname") {
            
//         // }
//     });
//     // socket.send("Hello!");
// });

httpServer.listen(3000, handleListen);
// app 에서 별로 안바뀐것 같지만 http서버 위에 websocket을 같이...


// {
//     type:"message",
//     payload:"hello everyone!"
// }
// 이런 형태

// JSON.stringify
// JSON.parse 