import React, { Component } from "react";
import './Login.css';
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', usernameError: '', passwordError: '' };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    let isValid = false;

    if (username.trim() === '') {
      this.setState({ usernameError: "Username is required." });
      isValid = true;
    } else {
      this.setState({ usernameError: "" });
    }

    if (password.trim() === '' || password.length()<=3 || password.length()>13) {
      this.setState({ passwordError: "Password is required." });
      isValid = true;
    } else {
      this.setState({ passwordError: "" });
    }

    if (!isValid) {
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);

    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password, usernameError, passwordError } = this.state;

    return (
      <div style={{ backgroundImage: "url(/images/Back.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover", position: "fixed" }}>
        <form className='form' onSubmit={this.handleSubmit}>
          <h2 className="hea">Login Form</h2>
          <div className='name'>
            <label className="uName">Username:</label>
            <input className='in' type="text" placeholder="Enter your Username" value={username} onChange={this.handleUsernameChange}></input><br/>
            {usernameError && <span className="error">{usernameError}</span>}
          </div>
          <div className='pass'>
            <label className="uPass">Password:</label>
            <input className="in2" type="password" placeholder="Enter Your Password" value={password} onChange={this.handlePasswordChange}></input><br/>
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <div>
            <button className="btn" type="submit"><Link to='/'>Log In</Link></button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;