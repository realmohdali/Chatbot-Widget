import BotUI from "./BotUI";
import Menu from "./Menu";
import PreChatForm from "./PreChatForm";
import LiveChatFrame from "./LiveChatFrame";
import { useState } from "react";

interface MyProps {
  closeChat: () => void;
  chatTitle?: string;
  liveChat: boolean;
  setLiveChat: React.Dispatch<React.SetStateAction<boolean>>;
  chat: boolean;
  setChat: React.Dispatch<React.SetStateAction<boolean>>;
  waiting: boolean;
  setWaiting: React.Dispatch<React.SetStateAction<boolean>>;
}
function ChatFrame(props: MyProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="initial-form-widget">
      <div className="chat-frame-header">
        <div className="chat-frame-title">
          {props.chatTitle ? props.chatTitle : "ChatBot Title"}
        </div>
        {!props.waiting && (
          <div
            className="chat-frame-options"
            onClick={() => setShowMenu(!showMenu)}
          >
            &#x22EE;
          </div>
        )}
        {showMenu && <Menu />}
        <div className="chat-frame-close-button" onClick={props.closeChat}>
          X
        </div>
      </div>
      {props.chat ? (
        props.liveChat ? (
          <LiveChatFrame
            waiting={props.waiting}
            setWaiting={props.setWaiting}
          />
        ) : (
          <BotUI setLiveChat={props.setLiveChat} />
        )
      ) : (
        <PreChatForm setChat={props.setChat} />
      )}
    </div>
  );
}

export default ChatFrame;
