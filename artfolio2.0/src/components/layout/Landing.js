import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Landing extends Component {


  render() {
    if (this.props.token) {
      this.props.history.push(`/user/${this.props.username}`);
    }
    return (
      <div className="container-card">
        <h1 className="welcome">Welcome!</h1>
        <p className="welcome-description">Show your art to the world!</p>
        <Link to="/signin" ><button className="card-btn">Sign In</button></Link>
        <Link to="/createaccount" ><button className="card-btn-2">Create Account</button></Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    token: state.token
  }
}

export default connect( mapStateToProps, {} )(Landing)