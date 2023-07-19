import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      dob: '',
      gender: '',
      password: '',
      cPass: '',
      usernameError: '',
      emailError: '',
      dobError: '',
      genderError: '',
      passwordError: '',
      cPassError: ''
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleDobChange = (event) => {
    this.setState({ dob: event.target.value });
  };

  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleCpassChange = (event) => {
    this.setState({ cPass: event.target.value });
  };

  validateEmail = (email) => {
    return email.includes('@');
  };

  validatePassword = (password) => {
    return password.length > 2 && password.length < 13;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, email, dob, gender, password, cPass } = this.state;

    let isValid = true;

    if (username.trim() === '') {
      this.setState({ usernameError: "Username is required." });
      isValid = false;
    } else {
      this.setState({ usernameError: "" });
    }

    if (email.trim() === '' || !this.validateEmail(email)) {
      this.setState({ emailError: "Invalid email address." });
      isValid = false;
    } else {
      this.setState({ emailError: "" });
    }

    if (dob.trim() === '') {
      this.setState({ dobError: "Date of birth is required." });
      isValid = false;
    } else {
      this.setState({ dobError: "" });
    }

    if (gender.trim() === '') {
      this.setState({ genderError: "Gender is required." });
      isValid = false;
    } else {
      this.setState({ genderError: "" });
    }

    if (password.trim() === '' || !this.validatePassword(password)) {
      this.setState({ passwordError: "Password must be between 3 and 12 characters." });
      isValid = false;
    } else {
      this.setState({ passwordError: "" });
    }

    if (cPass.trim() === '' || cPass !== password) {
      this.setState({ cPassError: "Passwords do not match." });
      isValid = false;
    } else {
      this.setState({ cPassError: "" });
    }

    if (!isValid) {
      return;
    }

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Date of Birth:', dob);
    console.log('Gender:', gender);
    console.log('Password:', password);
    console.log('Confirm Password:', cPass);

    this.setState({
      username: '',
      email: '',
      dob: '',
      gender: '',
      password: '',
      cPass: ''
    });
  };

  render() {
    const { username, email, dob, gender, password, cPass, usernameError, emailError, dobError, genderError, passwordError, cPassError } = this.state;

    return (
      <div style={{ backgroundImage: "url(/images/Back.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover", position: "fixed" }}>
        <form className='form1' onSubmit={this.handleSubmit}>
          <h2 className="hea1">Registration Form</h2>
          <div className='uName'>
            <label className='user'>Username:</label>
            <input className='in' type='text' placeholder='Enter Your Username' value={username} onChange={this.handleUsernameChange} required></input>
            {usernameError && <span className="error">{usernameError}</span>}
          </div>
          <div className='email'>
            <label className='id'>Email Id:</label>
            <input className='in1' type='email' placeholder='Enter Your Email' value={email} onChange={this.handleEmailChange} required></input>
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className='dob'>
            <label className='date'>Date Of Birth:</label>
            <input className='in2' type='date' value={dob} onChange={this.handleDobChange} required></input>
            {dobError && <span className="error">{dobError}</span>}
          </div>
          <div className="gen">
            <label className="gender">Gender:<br />
              <select value={gender} onChange={this.handleGenderChange} required>
                <option value="">Select Your Option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
            {genderError && <span className="error">{genderError}</span>}
          </div>
          <div className="pass">
            <label className="pass1">Password:</label>
            <input className="p1" type="password" placeholder="Enter Your Password" value={password} onChange={this.handlePasswordChange} required></input>
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <div className='cpass'>
            <label className='pass2'>Confirm Password:</label>
            <input className='p2' type='password' placeholder='Enter Your Confirm Password' value={cPass} onChange={this.handleCpassChange} required></input>
            {cPassError && <span className="error">{cPassError}</span>}
          </div>
          <div>
            <button className="btn" type="submit"><Link to='/'>Register</Link></button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
