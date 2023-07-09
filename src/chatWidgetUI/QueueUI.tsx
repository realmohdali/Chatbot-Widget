interface MyProps {
  setWaiting: React.Dispatch<React.SetStateAction<boolean>>;
}
function QueueUI(props: MyProps) {
  return (
    <div className="chat-queue-div">
      <button onClick={() => props.setWaiting(false)}>join</button>
    </div>
  );
}

export default QueueUI;
