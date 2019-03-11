import React from "react";

interface IState {
  message: string;
  author?: string;
}

class MessageForm extends React.Component<{}, IState> {
  state: IState = {
    message: "",
    author: ""
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value }: any = e.target;
    this.setState({
      [name]: value
    } as Pick<IState, keyof IState>);
  };

  handleClick = () => {
    console.log(this.state);
  };

  public render() {
    const { message, author } = this.state;
    return (
      <form>
        <h1>Message Form</h1>
        <div>
          <label>Message: </label>
          <input type="text" name="message" value={message} />
        </div>
        <div>
          <label>Author: </label>
          <input type="text" name="author" value={author} />
        </div>
        <button onClick={this.handleClick}>Submit</button>
      </form>
    );
  }
}

export default MessageForm;
