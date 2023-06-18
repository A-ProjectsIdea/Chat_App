const { chat } = require("./chat");
const authController = {};

//----------------------USER DATA------------------------------
authController.users = [];

authController.findUser = (id, users) => {
  return users.find((user, idx) => id === user.id) || false;
};
authController.addUser = (user, users) => {
  const id = user.id;
  const found = authController.findUser(id, users);
  found && users.push(user);
};
authController.deleteUser = (socket_id, users) => {
  const index = users.findIndex((user) => socket_id === user.socket_id);
  users.splice(index, 1);
};

//--------------------------AUTH-----------------------------
authController.auth = (io, socket) => {
  const token = socket.handshake.auth.token;
  const exist = authController.findUser(token, authController.users);
  console.log(token);
  console.log(exist);
  if (token && !exist) {
    chat(io, socket);
    socket.on("disconnect", (socket) => {
      console.log("id", socket.id);
      authController.deleteUser(socket.id, authController.users);
    });
  } else {
    socket.disconnect();
  }
};

module.exports = authController;
