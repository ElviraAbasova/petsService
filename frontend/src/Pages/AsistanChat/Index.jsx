import React, { useState, useEffect } from "react";
import "./AsistanChat.scss";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const AsistanChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.message, sender: data.id === socket.id ? "user" : "assistant" },
      ]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const msgData = {
        message: inputValue,
        id: socket.id,
      };
      socket.emit("send_message", msgData);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="message-content">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AsistanChat;
