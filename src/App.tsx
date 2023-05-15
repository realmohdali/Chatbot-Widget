import { useEffect, useState } from "react";
import "./App.css";
import image from "./assets/react.svg";
import ChatFrame from "./chatWidgetUI/ChatFrame";

function App() {
  var key: string = "";

  const [expanded, setExpanded] = useState(false);

  const showChatWidget = () => {
    setExpanded(true);
  };

  const hideChatWidget = () => {
    setExpanded(false);
  };

  useEffect(() => {
    key = document
      .getElementById("chat-bot-widget")
      ?.getAttribute("key")
      ?.valueOf()!!;
  }, []);

  return (
    <>
      {expanded ? (
        <ChatFrame closeChat={hideChatWidget} chatTitle="Form" />
      ) : (
        <div className="button-widget" onClick={showChatWidget}>
          <img src={image} alt="vite" />
        </div>
      )}
    </>
  );
}

export default App;
