import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import { io } from "socket.io-client";
import Home from "./components/Home";
const socket = io("http://localhost:5000/", {
  autoConnect: false,
  reconnectionDelayMax: 2000,
  transports: ["websocket"],
  auth: {
    token: null,
  },
});
function App() {
  const [isActive, setIsActive] = useState(
    localStorage.getItem("isActive") || false
  );
  return (
    <>
      {!isActive ? (
        <Login socket={socket} setIsActive={setIsActive} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
