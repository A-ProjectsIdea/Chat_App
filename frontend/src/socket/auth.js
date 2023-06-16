const connect = (socket, id) => {
  socket.auth.token = id;
  const connection = socket.connect();
  return connection.connected;
};
const checkUser = (socket, data) => {};
export { connect, checkUser };
