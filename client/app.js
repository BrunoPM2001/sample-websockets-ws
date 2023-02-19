let socket = new WebSocket("ws://localhost:8080");

const openSocket = (socket) => {
  socket.onmessage = ({ data }) => {
    let list = document.querySelector("#list");
    let newElement = document.createElement("li");
    newElement.textContent = data;
    list.appendChild(newElement);
  };
};

openSocket(socket);

document.getElementById("send").onclick = () => {
  let message = document.querySelector("#message").value;
  socket.send(message);
};

document.getElementById("close").onclick = () => {
  socket.close();
};

document.getElementById("open").onclick = () => {
  socket = new WebSocket("ws://localhost:8080");
  openSocket(socket);
};
