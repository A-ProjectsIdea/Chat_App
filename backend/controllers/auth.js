const { rooms, toggleRooms, toggleActive } = require("./room");

const authController = {};

//----------------------USER DATA------------------------------
authController.users = {};

//--------------------------AUTH-----------------------------
authController.auth = (io, socket) => {
  console.log(io.rooms);
  const token = socket.handshake.auth;
  authController.addUser = async () => {
    token.socket_id = socket.id;
    const user = await personRepository.createAndSave(token);
    const id = user.id;
    const found = authController.users[user.id];
    if (!found || !found.isActive) {
      user.socket_id = socket.id;
      authController.users[user.id] = user;
    } else {
      authController.users[user.id].socket_id = socket.id;
      authController.users[user.id].isActive = true;
    }
  };

  socket.on("disconnect", () => {
    authController.deleteUser(socket.id, authController.users);
    for (const key in authController.users) {
      if (authController.users[key].socket_id === socket.id) {
        authController.users[key].isActive = false;
      }
    }
  });
  authController.addUser();
};

module.exports = authController;
