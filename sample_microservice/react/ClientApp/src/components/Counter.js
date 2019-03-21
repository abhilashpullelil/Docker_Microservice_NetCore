import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export class Counter extends Component {
  displayName = Counter.name

  constructor(props) {
    super(props);
    this.state = { currentCount: 1000 };
      this.incrementCounter = this.incrementCounter.bind(this);
      this.buttonStyle = {
          color: 'white',
          marginTop: '10px'
      };
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 10
    });
  }

    render() {
    return (
      <div>
        <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{this.state.currentCount}</strong></p>

            <button onClick={this.incrementCounter}>Increment</button>
            <br/>
            <LinkContainer to={'/'} exact>
                <button style={
                    { color: "#FF0000" }
                }> Go home </button>
            </LinkContainer>

      </div>
    );
  }
}
