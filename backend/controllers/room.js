const roomController = {};
roomController.rooms = [];
roomController.toggleRooms = (num, array) => {
  if (Math.round(num / 3) > array.length) {
    console.log("num", num);
    array.push({ id: "room-" + array.length, active: false });
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

roomController.join = (io, socket) => {
  socket.on("room", (data) => {
    socket.join(data.room);
  });
};

module.exports = roomController;
