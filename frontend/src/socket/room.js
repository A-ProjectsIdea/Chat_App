const joinRoom = ({ socket }) => {
  socket.emit("join");
};

const leaveRoom = ({ socket }) => {
  socket.leave(room);
  socket.to(room).emit("user left");
};
