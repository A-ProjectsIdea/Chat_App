const connect = ({ socket, id, setState }) => {
  socket.auth.token = id;
  socket.connect();
  socket.on("connect", () => {
    setState(true);
    localStorage.setItem("isActive", true);
  });
  // return connection.connected;
};
const checkUser = (socket, data) => {};
export { connect, checkUser };
