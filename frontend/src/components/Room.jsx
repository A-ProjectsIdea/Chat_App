import { useContext, useEffect } from "react";
import { ActiveContext } from "../App";
import { joinRoom, joinedRoom, leaveRoom } from "../socket/room";
const Room = () => {
  const { socket, setRoom, id, room } = useContext(ActiveContext);
  const handelClick = (e) => {
    joinRoom({ socket, id });
  };
  useEffect(() => {
    joinedRoom({ socket, setRoom });
  }, [room]);

  return (
    <div>
      <button onClick={handelClick}>Join Random Room</button>
    </div>
  );
};

export default Room;
