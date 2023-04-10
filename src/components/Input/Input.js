import React, { useState } from "react";
import "./Input.scss"

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setText("");
      onSendMessage(text);
    }
  };

  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus
          className="Input-Field"
        />
        <button className="Input-Button">Send</button>
      </form>
    </div>
  );
};

export default Input;
