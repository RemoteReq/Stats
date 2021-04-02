import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
  
        <div className="list">

          <input
            placeholder="username"
            />

          <input
            placeholder="password"
            />

            <button>
              Login
            </button>
        </div>
      </div>
    )
  }
}

export default Login;