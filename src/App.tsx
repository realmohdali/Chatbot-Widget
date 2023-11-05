import { useEffect, useState } from "react";
import "./ChatWidget.css";
import ChatFrame from "./chatWidgetUI/ChatFrame";

function App() {
  const [cssLoaded, setCssLoaded] = useState(false);

  var tid = setInterval(function () {
    if (document.readyState !== "complete") return;
    clearInterval(tid);
    // do your work
    if (!cssLoaded) {
      var css = document.createElement("link");
      css.type = "text/css";
      css.rel = "stylesheet";
      css.href = "https://testapp.syedmohdali.com/assets/index.css";
      document.head.appendChild(css);
      setCssLoaded(true);
    }
  }, 100);

  var key: string;

  const [expanded, setExpanded] = useState(false);
  const [liveChat, setLiveChat] = useState(false);
  const [chat, setChat] = useState(false);
  const [waiting, setWaiting] = useState(true);

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
    document.cookie = `key= ${key}`;

    checkChatExist();
  }, []);

  const checkChatExist = () => {
    //implement the code to check if chat exist
    //executed when a page is refreshed
    var chatExists = false;
    var chatExistsWaiting = false;
    if (chatExists) {
      setExpanded(true);
      if (chatExistsWaiting) {
        setWaiting(true);
      } else {
      }
    }
  };

  // const showCookies = () => {
  //   const cookies = document.cookie.split(";");
  //   let fromCookie: string = "";
  //   cookies.forEach((cookie) => {
  //     if (cookie.startsWith("key")) {
  //       fromCookie = cookie;
  //     }
  //   });
  //   alert(fromCookie);
  // };

  var chatTitleString: string;
  if (chat) {
    if (liveChat) {
      if (waiting) {
        chatTitleString = "Queue";
      } else {
        chatTitleString = "My Chat Bot Name";
      }
    } else {
      chatTitleString = "Bot Name";
    }
  } else {
    chatTitleString = "Form";
  }

  return (
    <>
      {/* <button onClick={showCookies}>Cookies</button> */}
      {expanded ? (
        <ChatFrame
          closeChat={hideChatWidget}
          chatTitle={chatTitleString}
          chat={chat}
          liveChat={liveChat}
          setChat={setChat}
          setLiveChat={setLiveChat}
          waiting={waiting}
          setWaiting={setWaiting}
        />
      ) : (
        <div className="button-widget" onClick={showChatWidget}>
          <img
            src="https://testapp.syedmohdali.com/assets/react.svg"
            alt="chat"
          />
        </div>
      )}
    </>
  );
}

export default App;
