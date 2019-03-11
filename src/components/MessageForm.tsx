import React from "react";
import { IMessage } from "./types";

interface IState extends IMessage {}

class MessageForm extends React.Component<{}, IState> {
  state: IState = {
    message: "",
    author: ""
  };

  handleChange = (e: React.FormEvent<EventTarget>) => {
    const { name, value }: any = e.target;
    this.setState({
      [name]: value
    } as Pick<IState, keyof IState>);
  };

  handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(this.state);
  };

  public render() {
    const { message, author } = this.state;
    return (
      <form>
        <h1>Message Form</h1>
        <div>
          <label>Message: </label>
          <input
            type="text"
            name="message"
            value={message}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Author: </label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default MessageForm;
