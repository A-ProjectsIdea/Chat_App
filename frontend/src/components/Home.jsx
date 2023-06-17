// import { useContext } from "react";
import Form from "./Form";
import ChatView from "./chatView";

const Home = () => {
  // const { socket } = useContext(ActiveContext);

  return (
    <div className="flex flex-col gap-4 h-screen align-center max-w-screen-md min-h-max justify-center m-auto border-solid  ">
      <ChatView />
      <Form />
    </div>
  );
};

export default Home;
