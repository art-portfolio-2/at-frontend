import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../actions';
import { connect } from 'react-redux';

class UserLinks extends Component {

  signOut = e => {
    this.props.signOut();
  }

  render() {
    return (

        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={`/user/${this.props.user.username}`}>Dashboard</ Link></li>        
            <li><Link to="/createpost">Create Post</ Link></li>
            <li onClick={this.signOut}><Link to="/">Sign Out</ Link></li>

        </ul>
    )
  }
}

export default connect(null, { signOut })(UserLinks)
