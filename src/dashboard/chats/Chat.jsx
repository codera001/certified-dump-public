import React, { useEffect, useState } from "react";
import "./Chat.css";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ChatBox from "./ChatBox";

const Chat = () => {
  const { ticketId } = useParams();
  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState("");
  const ticketSubject = sessionStorage.getItem("ticket-subject");
  const userId = sessionStorage.getItem("userId");
  const preprocessMessage = (message) => {
    return message.replace(/'/g, "&apos;");
  };
  const GetTicketMessages = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api/getSupportChat?subjectId=${ticketId}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response.data.result);
      setMessages(response.data.result);
    } catch (error) {
      // console.log(error);
    }
  };

  const SendMessage = async () => {
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/supportChat",
        {
          subject: ticketSubject,
          subjectId: ticketId,
          message: preprocessMessage(textMessage),
          senderId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      GetTicketMessages();
      setTextMessage("");
      // console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    GetTicketMessages();
  }, []);

  return (
    <Layout>
      {/* chat component */}
      <div className="d-chatbox">
        {/* <!-- Right --> */}
        <div className="d-chatbox-inner">
          {/* <!-- Header --> */}
          <h3>
            Subject for {ticketSubject} {ticketId}
          </h3>
          {/* <!-- Messages --> */}
          <div className="d-messages">
            {messages.map((message, i) => (
              <ChatBox message={message} i={i} key={i} userId={userId} />
            ))}
          </div>
          {/* <!-- Input --> */}
          <div className="d-chat-input">
            <div className="d-chat-input-container">
              <textarea
                value={textMessage}
                rows={3}
                cols={50}
                onChange={(e) => {
                  setTextMessage(e.currentTarget.value);
                }}
              />
            </div>
            <button
              onClick={() => {
                if (textMessage.trim() !== "") SendMessage();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
