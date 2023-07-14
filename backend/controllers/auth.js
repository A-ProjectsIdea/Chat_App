const { rooms, toggleRooms, toggleActive } = require("./room");

const authController = {};

//----------------------USER DATA------------------------------
authController.users = [];

authController.findUser = (id, users) => {
  return (
    users.find((user, idx) => {
      return id === user.id || id === user.socket_id;
    }) || false
  );
};
authController.addUser = (user, users) => {
  const id = user.id;
  const found = authController.findUser(id, users);
  !found && users.push(user);
  toggleRooms(authController.users.length, rooms);
};
authController.deleteUser = (socket_id, users) => {
  const index = users.findIndex((user) => socket_id === user.socket_id);
  rooms.length > 0 && toggleActive(users[index], rooms);
  toggleRooms(authController.users.length, rooms);
  users.splice(index, 1);
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

    socket.on("disconnect", () => {
      console.log("socket.id", socket.id);
      authController.deleteUser(socket.id, authController.users);
    });
  } else {
    socket.disconnect();
  }
};

module.exports = authController;
