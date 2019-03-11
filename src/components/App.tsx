import React, { Component } from "react";
import "./App.css";

import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

const messageList: any = [
  { message: "aloha", author: "yeman" },
  { message: "hey hey hey", author: "ayes" },
  { message: "why the earth spins", author: "" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <MessageForm />
          <MessageList messageList={messageList} />
        </main>
      </div>
    );
  }
}

export default App;
