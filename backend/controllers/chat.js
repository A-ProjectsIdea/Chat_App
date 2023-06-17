const chatController = {};

chatController.chat = (io, socket) => {
  socket.on("message", (data) => {
    console.log(data);
  });
};

module.exports = chatController;
