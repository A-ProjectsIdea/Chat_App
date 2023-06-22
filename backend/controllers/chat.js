const chatController = {};

chatController.chat = (io, socket) => {
  socket.on("message", (data) => {
    console.log(data);
    io.to(data.room).emit("message", data);
  });
};

module.exports = chatController;
