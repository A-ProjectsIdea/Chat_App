import { useContext, useEffect } from "react";
import { ActiveContext } from "../App";
import { connect } from "../socket/auth";
import { joinRoom, joinedRoom } from "../socket/room";
const Room = () => {
  const { socket, setRoom, id, room, setId } = useContext(ActiveContext);
  const handelClick = () => {
    joinRoom({ socket, id });
  };
  useEffect(() => {
    connect({
      socket,
      id,
      setId,
    });
  }, []);
  useEffect(() => {
    console.log("room");
    joinedRoom({ socket, setRoom });
  }, [room]);

  return (
    <div>
      <button onClick={handelClick}>Join Random Room</button>
    </div>
  );
};

export default Room;
