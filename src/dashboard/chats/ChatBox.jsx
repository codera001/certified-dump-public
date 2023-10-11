import React from "react";

const ChatBox = ({ message, i, userId }) => {
  const postprocessMessage = (message) => {
    return message.replace(/&apos;/g, "'");
  };
  return (
    <>
      {message.senderId === userId ? (
        // messages to the right
        <div key={i} className="d-sent-message">
          <div className="d-sent-message-inner">
            <p className="d-sent-text">{postprocessMessage(message.message)}</p>
            <p className="d-sent-time">
              {new Date(message.date).toDateString() +
                " " +
                new Date(message.date).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ) : (
        // messages to the left
        <div key={i} className="d-received-message">
          <div className="d-received-message-inner">
            <p className="d-received-text">
              {postprocessMessage(message.message)}
            </p>
            <p className="d-received-time">
              {new Date(message.date).toDateString() +
                " " +
                new Date(message.date).toLocaleTimeString()}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
