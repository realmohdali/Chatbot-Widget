import QueueUI from "./QueueUI";
import LiveChatUI from "./LiveChatUI";

interface MyProps {
  waiting: boolean;
  setWaiting: React.Dispatch<React.SetStateAction<boolean>>;
}

function LiveChatFrame(props: MyProps) {
  return (
    <>
      {props.waiting ? (
        <QueueUI setWaiting={props.setWaiting} />
      ) : (
        <LiveChatUI />
      )}
    </>
  );
}

export default LiveChatFrame;
