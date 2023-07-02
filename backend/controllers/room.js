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
roomController.join = (io, room) => {
  room.active = true;
  console.log(room);
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
      console.log(found);
      roomController.join(io, found.id);
      id && clearTimeout(id);
      if (found.users.length === 3) {
        roomController.join(io, found);
      } else if (found.users.length === 2) {
        setTimeout(() => {
          roomController.join(io, found);
        }, 3000);
      }
    }
  });
};

module.exports = roomController;
