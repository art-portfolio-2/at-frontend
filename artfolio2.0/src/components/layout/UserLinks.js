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
        <ul id="nav-mobile" className="right hide-on-med-and-down navigation">
            <li className="links"><Link to={`/user/${this.props.user.username}`}>Dashboard</ Link></li>        
            <li className="links"><Link to="/createpost">Create Post</ Link></li>
            <li className="links" onClick={this.signOut}><Link to="/">Sign Out</ Link></li>
        </ul>
    )
  }
}

export default connect(null, { signOut })(UserLinks)

//https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80
//
