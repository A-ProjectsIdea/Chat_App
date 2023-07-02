const chatController = {};
const { findUser, users } = require("./auth");
chatController.chat = (io, socket) => {
  const found = findUser(socket.id, users);
  console.log(found);
  if (found) {
    socket.on("message", (data) => {
      console.log(data);
      // io.to(data.room).emit("message", data);
      io.emit("message", data);
    });
  }
};

module.exports = chatController;
