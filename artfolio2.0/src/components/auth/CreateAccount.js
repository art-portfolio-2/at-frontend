import React, { Component } from 'react'
import { connect } from 'react-redux';

import { createAccount } from '../../actions';


class CreateAccount extends Component {
    state =   {
        username: '',
        password: '',
        fullName: '',
        email: '',
        userImgUrl: ''
      }
    

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createAccount = e => {
        e.preventDefault();
        this.props.history.push("/")
        this.props.createAccount(this.state);
    }

    render() {
        return (
            <div className="create-account-card" style={{margin:"40px auto", padding:"60px"}}>
            <form onSubmit={this.createAccount} className="col s12">
                <div className="row">
                    <div className="input-div">
                        <label>Username</label>
                        <input onChange={this.handleChanges} value={this.state.username} name="username" type="text" className="validate"/>
                    </div>
                    <div className="input-div">
                        <label>Password</label>
                        <input onChange={this.handleChanges} value={this.state.password} name="password" type="password" className="validate"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="input-div">
                    <label>Full Name</label>
                    <input onChange={this.handleChanges} value={this.state.fullName} name="fullName" type="text" className="validate"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-div">
                        <label>Email</label>
                        <input onChange={this.handleChanges} value={this.state.email} name="email" type="email" className="validate"/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-div">
                        <label>User Image Url</label>
                        <input onChange={this.handleChanges} value={this.state.userImgUrl} name="userImgUrl" type="text" className="validate"/>
                    </div>
                </div>
                <button className="create-account-btn waves-effect waves-light btn #00695c teal darken-3">Create Account</button>
            </form>
    </div>
        )
    }
}

export default connect(null, { createAccount })(CreateAccount)
