const express = require("express");
const socket = require("socket.io");
const app = express();
const server = app.listen(process.env.PORT || 4000, () =>
  console.log("Server running on port 4000")
);

// Static files
app.use(express.static("public"));

// Need to maintain only 10 records as logs
let logarray = [];

const io = socket(server);

io.on("connection", (socket) => {
  console.log("Client connection established", socket.id);
  socket.emit("calc-log", "Socket connection established");
  logarray = logarray.slice(0, 10);
  io.sockets.emit("log", logarray);
  socket.on("log", (data) => {
    logarray.unshift({ user: data.username, logvalue: data.logvalue });
    logarray = logarray.slice(0, 10);
    io.sockets.emit("log", logarray);
  });
});
