const roomController = {};
roomController.rooms = {};


roomController.room = (io, socket) => {
  socket.on("create-room", (data) => {

    
    socket.join("data.room")
    });

};

module.exports = roomController;
