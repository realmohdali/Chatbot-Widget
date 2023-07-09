interface MyProps {
  setChat: React.Dispatch<React.SetStateAction<boolean>>;
}
function PreChatForm(props: MyProps) {
  const submitPreChatForm = () => {
    //e.preventDefault();
    props.setChat(true);
  };
  const keyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    var textArea = document.getElementById("message") as HTMLInputElement;
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      e.preventDefault();
      submitPreChatForm();
    }
    if ((e.key === "Enter" || e.key === "NumpadEnter") && e.shiftKey) {
      var content = textArea.value;
      textArea.value = content + "\n";
    }

    // textArea.style.height = "12px";
    // //textArea.style.height = textArea.scrollHeight - 18 + "px";
    // textArea.style.height = textArea.scrollHeight + "px";
  };
  return (
    <div className="pre-chat-form">
      <form id="preChatForm" onSubmit={submitPreChatForm}>
        <input type="text" id="name" placeholder="Full Name" required />
        <input type="email" id="email" placeholder="Email ID" required />
        <textarea
          id="message"
          placeholder="Message"
          onKeyDown={keyUp}
          required
        />
        <input type="submit" className="submit-button" value="Start Chat" />
      </form>
    </div>
  );
}

export default PreChatForm;
