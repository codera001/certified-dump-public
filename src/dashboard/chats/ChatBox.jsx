import React from 'react'

const ChatBox = ({message, i, userId}) => {
  return (
    <>
      {message.senderId === userId ? (
        // messages to the right
        <div key={i} className="d-sent-message">
          <div className="d-sent-message-inner">
            <p className="d-sent-text">{message.message}</p>
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
            <p className="d-received-text">Admin message</p>
            <p className="d-received-time">22/8/2929</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBox