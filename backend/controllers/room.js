const roomController = {};
roomController.rooms = [];
roomController.toggleRooms = (num, array) => {
  if (Math.round(num / 3) > array.length) {
    const roomObj = { id: "room-" + array.length, active: false, users: [] };
    array.push(roomObj);
    return;
  } else if (Math.round(num / 3) < array.length) {
    array.find((room, idx) => {
      if (!room.active) {
        array.splice(idx, 1);
        return true;
      }
    });
  }
};
roomController.toggleActive = (user, array) => {
  const found = array.find((room, idx) => {
    return (
      room.users[0] == user.id ||
      room.users[1] == user.id ||
      room.users[2] == user.id
    );
  });
  if (!found) {
    return;
  }
  if (found.users.length < 2) {
    found.active = false;
    found.users = [];
  } else {
    found.users.splice(found.users.indexOf(user.id), 1);
  }
};

roomController.join = (io, room) => {
  console.log("room");
  room.active = true;
  io.sockets.in(room.id).emit("join", { room: room.id });
};
roomController.room = (io, socket) => {
  socket.on("join", (data) => {
    let id;
    const found = roomController.rooms.find((room, idx) => {
      if (!room.active) {
        return room;
      }
    });
    if (found) {
      found.users.push(data.id);
      socket.join(found.id);
      if (found.users.length === 3) {
        id && clearTimeout(id);
        roomController.join(io, found);
      } else if (found.users.length === 2) {
        id = setTimeout(() => {
          roomController.join(io, found);
        }, 3000);
      }
    }
  });
};

module.exports = roomController;
