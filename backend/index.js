const express = require("express");
const app = express();
const port = 5000;
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const { Server } = require("socket.io");
const io = new Server(server, { origin: "*" });
// socket connection auth
const { auth } = require("./controllers/auth");
app.get("/", (req, res) => res.send("Hello World!"));
app.use(cors());

io.on("connection", (socket) => {
  console.log(socket);
  auth(io, socket);
});
server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
