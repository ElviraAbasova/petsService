const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv/config");
const routes = require("./src/routers/Router");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
require("./src/config/db");
app.use("/api", routes);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);
  socket.on("send_message", (data) => {
    io.emit("receive_message", data); 
  });

});

server.listen(PORT, () => {
  console.log("Server has started on port " + PORT);
});