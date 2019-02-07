import React, { Component } from 'react'
import SignedOutLinks from './SignedOutLinks';
import UserLinks from './UserLinks';
import { connect } from "react-redux";
import {  Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
         <nav>

            <div className="nav-wrapper #00695c teal darken-3">
            <Link to="/" className="brand-logo left">ArtFolio2.0</Link>
            {this.props.signedIn ? <UserLinks user={this.props.user} /> : <SignedOutLinks />}

            </div>
        </nav>
    )
  }
}

const mapStateToProps = state => (
    {
        signedIn: state.signedIn,
        user: state.user
    }
)

export default connect(mapStateToProps, {})(Nav)