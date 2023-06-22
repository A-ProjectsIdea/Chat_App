const { chat } = require("./chat");
const { rooms, toggleRooms } = require("./room");

const authController = {};

//----------------------USER DATA------------------------------
authController.users = [];

authController.findUser = (id, users) => {
  return users.find((user, idx) => id === user.id) || false;
};
authController.addUser = (user, users) => {
  const id = user.id;
  const found = authController.findUser(id, users);
  !found && users.push(user);
  toggleRooms(authController.users.length, rooms);
  console.log("rooms", rooms);
};
authController.deleteUser = (socket_id, users) => {
  const index = users.findIndex((user) => socket_id === user.socket_id);
  users.splice(index, 1);
  toggleRooms(authController.users.length, rooms);
  console.log("rooms", rooms);
};

//--------------------------AUTH-----------------------------
authController.auth = (io, socket) => {
  const token = socket.handshake.auth.token;
  const exist = authController.findUser(token, authController.users);
  if (token && !exist) {
    authController.addUser(
      { id: token, socket_id: socket.id },
      authController.users
    );
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
