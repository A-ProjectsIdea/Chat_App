// import { useContext } from "react";
import Form from "./Form";
import ChatView from "./ChatView";
import { useState, useContext, useEffect } from "react";

import { ActiveContext } from "../App";
const messagesData = [
  { id: "anas", message: "hello", time: Date.now() },
  { id: "ahmad", message: "hello anas", time: Date.now() },
  { id: "anas", message: "how ru", time: Date.now() },
  { id: "ahmad", message: "good thank you and u", time: Date.now() },
  { id: "anas", message: "good", time: Date.now() },
];
import { receiveMessage } from "../socket/message";

const Home = () => {
  const { socket } = useContext(ActiveContext);

  const [messages, setMessages] = useState(messagesData || null);

  useEffect(() => {
    receiveMessage({ socket, setMessages });
  }, []);

  return (
    <div className="flex flex-col gap-4 h-screen align-center max-w-screen-md min-h-max justify-center m-auto border-solid  ">
      <div className="flex flex-col h-4/5 border-solid border-2 border-gray-100 w-full ">
        {messages &&
          messages.map((obj) => {
            return <ChatView obj={obj} />;
          })}
      </div>

      <Form />
    </div>
  );
};

export default Home;
