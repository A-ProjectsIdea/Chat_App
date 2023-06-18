import React from "react";
const messages = [
  { id: "anas", message: "hello", time: Date.now() },
  { id: "ahmad", message: "hello anas", time: Date.now() },
  { id: "anas", message: "how ru", time: Date.now() },
  { id: "ahmad", message: "good thank you and u", time: Date.now() },
  { id: "anas", message: "good", time: Date.now() },
];
import { useContext } from "react";
import { ActiveContext } from "../App";

const ChatView = () => {
  const { socket, id } = useContext(ActiveContext);
  return (
    <div className="flex flex-col h-4/5 border-solid border-2 border-gray-100 w-full ">
      {messages &&
        messages.map((obj, idx) => {
          return (
            <div
              key={obj.id + idx}
              id="toast-message-cta"
              className={` self-start sm:w-80 xs:w-60 max-w-xs p-1 text-gray-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 m-1 ${
                id == obj.id
                  ? "bg-white"
                  : "bg-emerald-300 lg:left-2/4 self-end "
              }`}
              // +
              role="alert"
            >
              <div className="ml-3 text-sm font-normal">
                <div className="flex flex-row justify-between">
                  <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {obj.id}
                  </span>
                  <small className="self-end">{obj.time}</small>{" "}
                </div>
                <div className="mb-2 text-sm font-normal">{obj.message}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ChatView;
