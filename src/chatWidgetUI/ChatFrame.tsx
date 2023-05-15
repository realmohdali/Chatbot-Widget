interface MyProps {
  closeChat: () => void;
  chatTitle?: string;
}
function ChatFrame(props: MyProps) {
  return (
    <div className="initial-form-widget">
      <div className="chat-frame-header">
        <div className="chat-frame-title">
          {props.chatTitle ? props.chatTitle : "ChatBot Title"}
        </div>
        <div className="chat-frame-close-button" onClick={props.closeChat}>
          X
        </div>
      </div>
    </div>
  );
}

export default ChatFrame;
