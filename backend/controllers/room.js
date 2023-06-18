const roomController = {};

roomController.join = (io, socket) => {
  socket.on("room", (data) => {
    socket.join(data.room);
  });
};

module.exports = roomController;
