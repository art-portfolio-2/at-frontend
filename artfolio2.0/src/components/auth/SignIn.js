import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions'

class SignIn extends Component {

  state = {
    username: '',
    password: '',
  }

  signIn = e => {
    e.preventDefault();
    this.props.history.push(`/`)
    this.props.signIn(this.state);
  }


  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
<<<<<<< HEAD
      
      <form onSubmit={this.signIn} className="container card" style={{margin:"40px auto", padding:"60px"}}>
=======
      <form onSubmit={this.signIn} className="sign-in-card">
>>>>>>> 282276d3fbf6d845b7bdc44913ff428c3403e21f
        <div className="row">
              <label className="signin-text">Email</label>
              <div className="input-field col s12">

              <input onChange={this.handleChanges} value={this.state.username} name="username" type="text" className="validate"/>
              <label>Username</label>

              </div>
          </div>
          <div className="row">
            <label className="signin-text">Password</label>
            <div className="input-field col s12">
            <input onChange={this.handleChanges} value={this.state.password} name="password" type="password" className="validate"/>
            </div>
        </div>
          <button className="card-btn-signin">Sign In</button>
      </form>
    )
  }
}

export default connect(null, { signIn })(SignIn)