import { WebSocketServer } from "ws";

const server = new WebSocketServer({
  port: "8080",
});

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    server.broadcast(message);
  });
});

server.broadcast = (msg) => {
  console.log("Message: ", msg.toString());
  server.clients.forEach((client) => {
    client.send(`${msg}`);
  });
};
