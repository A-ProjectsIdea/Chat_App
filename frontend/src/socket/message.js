const sendMessage = ({ socket, data }) => {
  if (socket && data) {
    socket.emit("message", data);
  }
};
const receiveMessage = ({ socket, setMessages }) => {
  if (!socket) {
    return;
  }
  socket.on("message", (data) => {
    setMessages((prev) => [...prev, data]);
  });
  // return connection.connected;
};
export { sendMessage, receiveMessage };
