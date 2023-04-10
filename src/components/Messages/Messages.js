import React from "react";
import "./Messages.scss"

const Messages = ( { messages, currentMember }) => {
 

  const renderMessage = (message) => {
    const { member, text } = message;
    const messageFromMe = member.username === currentMember.username;
    const className = messageFromMe
      ? "Messages-Message Current-Member"
      : "Messages-Message";
    return (
      <li className={className}>
        <span
        />
        <div className="Message-Content">
          <div className="Username">{member.username}</div>
          <div className="Text">{text}</div>    
        </div>
      </li>
    );
  };

  return <ul className="Messages-List">{messages.map(renderMessage)}</ul>;
}

export default Messages;