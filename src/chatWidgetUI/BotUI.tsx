interface MyProps {
  setLiveChat: React.Dispatch<React.SetStateAction<boolean>>;
}
function BotUI(props: MyProps) {
  return (
    <>
      <div className="bot-ui-div">BotUI</div>
      <div
        className="chat-with-human-button"
        onClick={() => props.setLiveChat(true)}
      >
        Chat With Human
      </div>
    </>
  );
}

export default BotUI;
