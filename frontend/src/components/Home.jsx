import React from "react";
import Form from "./Form";
import ChatView from "./chatView";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 h-screen align-center max-w-screen-md min-h-max justify-center m-auto border-solid border-2 border-gray-100 p-2">
      <ChatView />
      <Form />
    </div>
  );
};

export default Home;
