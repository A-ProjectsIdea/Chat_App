import { useState, createContext } from "react";
import "./App.css";
import Login from "./components/Login";
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
export const ActiveContext = createContext(null);
function App() {
  const [isActive, setIsActive] = useState(
    sessionStorage.getItem("isActive") || false
  );
  const [id, setId] = useState(sessionStorage.getItem("id"));
  return (
    <>
      <ActiveContext.Provider
        value={{ isActive, setIsActive, id, setId, socket }}
      >
        {!isActive ? <Login /> : <Home />}
      </ActiveContext.Provider>
    </>
  );
}

export default App;
