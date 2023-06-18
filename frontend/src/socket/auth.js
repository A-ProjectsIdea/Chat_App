const connect = ({ socket, id, setId, setIsActive }) => {
  socket.auth.token = id;
  socket.connect();
  socket.on("connect", () => {
    setIsActive(true);
    setId(id);
    sessionStorage.setItem("isActive", true);
    sessionStorage.setItem("id", id);
  });
  // return connection.connected;
};
const checkUser = (socket, data) => {};
export { connect, checkUser };
