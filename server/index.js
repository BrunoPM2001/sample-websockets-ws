import { WebSocketServer } from "ws";

const server = new WebSocketServer({
  port: "8080",
});

server.on("connection", (socket, req) => {
  console.log(`New client is connected, ip: ${req.socket.remoteAddress}`);

  //  Message from client
  socket.on("message", (message) => {
    server.broadcast(message);
  });

  //  Close connections
  socket.on("close", () => {
    console.log("A client got disconnected :(");
  });

  //  Errors
  socket.on("error", console.error);
});

server.broadcast = (msg) => {
  console.log(`Sending ${server.clients.size} messages`);
  server.clients.forEach((client) => {
    client.send(`${msg}`);
  });
};
