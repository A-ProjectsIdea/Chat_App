const connect = ({ socket, id }) => {
  socket.auth.token = id;
  socket.connect();
  socket.on("connect", () => {
    sessionStorage.setItem("isActive", true);
    sessionStorage.setItem("id", id);
  });
  // return connection.connected;
};
const checkUser = (socket, data) => {};
export { connect, checkUser };
