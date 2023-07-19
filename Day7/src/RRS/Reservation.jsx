import React, { Component } from "react";
import './Reservation.css';

class Reserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      email: '',
      Date: '',
      Time:'',
      NOM: '',
    };
  }

  handleuName = (eve) => {
    this.setState({ Username: eve.target.value });
  };

  handleEmail = (eve) => {
    this.setState({ email: eve.target.value });
  };

  
  handleDate = (eve) => {
    this.setState({ Date: eve.target.value });
  };
  
  handleTime = (eve) => {
    this.setState({ Time: eve.target.value });
  };
  
  handleNOM = (eve) => {
    this.setState({ NOM: eve.target.value });
  };

  handleSubmit = (eve) => {
    eve.preventDefault();

    console.log('Username: ', this.state.Username);
    console.log('Email: ', this.state.email);
    console.log('Date: ', this.state.Date);
    console.log('Time: ',this.state.Time);
    console.log('NOM: ', this.state.NOM);

    alert("Successfully Reserved");

    this.setState({ Username: '', email: '', Date: '', Time: '',NOM:''});
  };

  render() {
    const { Username, email, Date, Time, NOM } = this.state;

    return (
      <div style={{ backgroundImage: "url(/images/Back.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover", position: "fixed" }}>
        <form className='form1' onSubmit={this.handleSubmit}>
          <h2 className="hea1">Reservation Form</h2>
          <div className='uName'>
            <label className='user'>Username: </label>
            <input className='in' type='text' placeholder='Enter Your Username' onChange={this.handleuName} value={Username} required></input>
          </div>
          <div className='email'>
            <label className='id'>Email Id: </label>
            <input className='in1' type='email' placeholder='Enter Your Email' onChange={this.handleEmail} value={email} required></input>
          </div>
          <div className="date">
            <label className="d1">Date:</label>
            <input type="date" onChange={this.handleDate} value={Date} required></input>
          </div>
          <div className="time">
            <label className="d2">Time:</label>
            <input type="time" onChange={this.handleTime} value={Time} required></input>
          </div>
          <div className='dob'>
            <label className='date'>No Of Members</label>
            <input className='in2' type='number' onChange={this.handleNOM} value={NOM} required></input>
          </div>
          <div>
            <button className="btn" type="submit">Reserve</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Reserve;
