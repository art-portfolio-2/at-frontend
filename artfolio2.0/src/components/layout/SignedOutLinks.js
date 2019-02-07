import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignedOutLinks extends Component {
  render() {
    return (
        <ul id="nav-mobile" className="navigation">
            <li className="links"><Link to="/signin">Sign In</Link></li>
            <li className="links"><Link to="/createaccount">Create Account</Link></li>
        </ul>
    )
  }
}
