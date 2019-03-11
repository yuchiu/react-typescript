import React from "react";

interface IMessage {
  message: string;
  author?: string;
}

interface IProps {
  messageList: IMessage[];
}

const MessageList: React.FunctionComponent<IProps> = ({ messageList = [] }) => (
  <ul>
    <h1>Message List</h1>
    {messageList.map((messageItem, i) => (
      <li key={`message-item-${i}`}>
        <span>{messageItem.message}</span>
        <span>{messageItem.author}</span>
      </li>
    ))}
  </ul>
);

export default MessageList;
