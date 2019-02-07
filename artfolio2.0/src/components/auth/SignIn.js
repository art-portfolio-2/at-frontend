import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';


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

      <form onSubmit={this.signIn} className="sign-in-card" >
        <div className="row">
            <div className="input-field col s12">
              <input onChange={this.handleChanges} value={this.state.username} name="username" type="text" className="validate"/>
              <label className="signin-text">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input onChange={this.handleChanges} value={this.state.password} name="password" type="password" className="validate"/>
              <label className="signin-text">Password</label>
            </div>
        </div>
          <button className="card-btn-signin">Sign In</button>
      </form>
    )
  }
}

export default connect(null, { signIn })(SignIn)