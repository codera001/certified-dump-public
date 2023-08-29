import React from "react";
import "./Chat.css";
import Layout from "../components/Layout/Layout";

const Chat = () => {
  return (
    <Layout>
      {/* chat component */}
      <div className="d-chatbox">
        {/* <!-- Right --> */}
        <div className="d-chatbox-inner">
          {/* <!-- Header --> */}
          <h3> Subject</h3>
          {/* <!-- Messages --> */}
          <div className="d-messages">
            {/* <div className="px-3 py-2"> */}
            {/* messages to the right */}
            <div className="d-sent-message">
              <div className="d-sent-message-inner">
                <p className="d-sent-text">User Message</p>
                <p className="d-sent-time">28/2/2030</p>
              </div>
            </div>
            {/* messages to the left */}
            <div className="d-received-message">
              <div className="d-received-message-inner">
                <p className="d-received-text">Admin message</p>
                <p className="d-received-time">22/8/2929</p>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* <!-- Input --> */}
          <div className="d-chat-input">
            <div className="d-chat-input-container">
              <input type="text" />
            </div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
