const socket = new WebSocket("ws://localhost:8080");

socket.onmessage = ({ data }) => {
  let list = document.querySelector("#list");
  let newElement = document.createElement("li");
  newElement.textContent = data;
  list.appendChild(newElement);
  console.log("Message from server: ", data);
};

document.getElementById("send").onclick = () => {
  let message = document.querySelector("#message").value;
  socket.send(message);
};

document.getElementById("close").onclick = () => {
  socket.close();
};
