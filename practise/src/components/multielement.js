import React, { Component } from 'react';

class MultiElement extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: ''
    };
  }

  change = (event) => {
    const { name, value } = event.target; // Destructure name and value from the input
    this.setState({ [name]: value }); // Dynamically update the corresponding state property
  };

  render() {
    return (
      <form>
        <div>
          <h2>Multi inputs</h2>
          <div>
            <input
              type="text"
              name="username" // Add the name attribute
              value={this.state.username}
              onChange={this.change}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              type="email"
              name="email" // Add the name attribute
              value={this.state.email}
              onChange={this.change}
              placeholder="Email"
            />
          </div>
          <div>
            <h2>
              Username: {this.state.username}, Email: {this.state.email}
            </h2>
          </div>
        </div>
      </form>
    );
  }
}

export default MultiElement;
