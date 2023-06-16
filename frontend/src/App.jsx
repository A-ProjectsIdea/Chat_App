import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000/", {
  autoConnect: false,
  reconnectionDelayMax: 2000,
  transports: ["websocket"],
  auth: {
    token: null,
  },
});
function App() {
  return (
    <>
      <Login socket={socket} />
    </>
  );
}

export default App;
