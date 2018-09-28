import React from 'react';
// import axios from 'axios';
import openSocket from 'socket.io-client';




// this.setState({ message: [...this.state.message, msg] });

export default class App extends React.PureComponent {
  state = {
    socket: '',
    value: '',
    message: [],
  };

  componentDidMount = () => {
    const socket = openSocket();

    this.setState({ socket });

    const self = this;
    socket.on('chat message', (msg) => {
      console.log('Message: ', msg);
      self.setState({ message: [...this.state.message, msg] })
    });

  }


  handleChange = (event) => {
    const value = event.target.value;

    this.setState({ value: value });
  };

  sendMessage = (event) => {
    event.preventDefault();

    const value = this.state.value;
    this.state.socket.emit('chat message', value);
    this.setState({ value: '' });

  };


  render() {
    console.log('State: ', this.state);
    return (
      <div>
        <h2>Hello World</h2>

        <div className="message">
          {this.state.message.map((msg, index) => (
            <p key = {index}>{index} - {msg} </p>
          ))}
        </div>

        <form onSubmit={this.sendMessage}>
          <div>
            <label htmlFor=""></label>
            <input type="text" onChange={this.handleChange} value={this.state.value} />
          </div>

          <button>Send message</button>
        </form>
      </div>
    );
  }
};


