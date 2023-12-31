const joinRoom = ({ socket, id }) => {
  socket.emit("join", { id });
};

const joinedRoom = ({ socket, setRoom }) => {
  socket.on("join", (data) => {
    console.log(data);
    setRoom(data.room);
  });
};
const leaveRoom = ({ socket, room }) => {
  socket.leave(room);
  socket.to(room).emit("user left");
};
export { joinRoom, joinedRoom, leaveRoom };
