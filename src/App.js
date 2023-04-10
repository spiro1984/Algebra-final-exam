import React, { useState, useEffect } from 'react';
import Messages from './components/Messages/Messages';
import Login from './components/Login/Login';
import Input from './components/Input/Input';
import './App.scss';

function App() {
  const [messages, setMessages] = useState([]);

  const [member, setMember] = useState({
    username: "",
    color: "",
    clientData: null
  });

  const handleLogin = (username) => {
    setMember({
      username: username,
      color: "blue",
      clientData: {
        username: username,
        color: "blue",
      },
    });
  };

  const [room, setRoom] = useState(null);
  const [drone, setDrone] = useState(null);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message
    });
  };

  useEffect(() => {
    if (member.username !== "") {
      const newDrone = new window.Scaledrone("NdwPZPgowfqFzeV0", {
        data: {
          username: member.username,
          color: member.color,
        },
      });

      setDrone(newDrone);

      const newRoom = newDrone.subscribe("observable-room");
      setRoom(newRoom);
    }
  }, [member]);

  useEffect(() => {
    if (room) {
      room.on("data", (data, member) => {
        const newMessage = {
          text: data,
          member: {
            id: member.id,
            username: member.clientData.username,
            color: member.clientData.color,
            clientData: member.clientData,
          },
        };
        setMessages([...messages, newMessage]);
      });
    }
  }, [room, messages]);

  return (
    <div className="App">
      {member.username !== "" ? (
        <>
          <div className="App-header">
            <h1>ChatMate</h1>
          </div>
          <Messages messages={messages} currentMember={member} />
          <Input onSendMessage={onSendMessage} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

