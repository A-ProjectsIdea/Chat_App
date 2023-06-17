const sendMessage = ({ socket, data }) => {
  if (!socket || !data) {
    socket.emit("message", data);
  }
};
const receiveMessage = ({ socket, data, setState }) => {
  if (!socket || !data) {
  }

  // return connection.connected;
};
export { sendMessage, receiveMessage };
