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
    <div className="h-4/5 border-solid border-2 border-gray-100 ">
      {messages &&
        messages.map((obj, idx) => {
          return (
            <div
              key={obj.id + idx}
              id="toast-message-cta"
              className={`relative w-4/5 max-w-xs p-1 text-gray-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 m-1 ${
                id == obj.id ? "bg-white" : "bg-emerald-300 left-2/4"
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
