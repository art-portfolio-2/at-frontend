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
            <div className="create-account-card">
                <form onSubmit={this.createAccount} className="col s12">
                    <div className="row">
                        <label className="create-title">First Name</label>
                        <div className="input-field col s6">

                            <input onChange={this.handleChanges} value={this.state.username} name="username" type="text" className="validate"/>
                            <label>Username</label>

                        </div>

                        <label className="create-title">Last Name</label>
                        <div className="input-field col s6">

                            <input onChange={this.handleChanges} value={this.state.password} name="password" type="password" className="validate"/>
                            <label>Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input onChange={this.handleChanges} value={this.state.fullName} name="fullName" type="text" className="validate"/>
                        <label>Full Name</label>

                        </div>
                    </div>

                    <div className="row">
                        <label className="create-title">Email</label>
                        <div className="input-field col s12">
                        <input onChange={this.handleChanges} value={this.state.email} name="email" type="email" className="validate-create"/>
                        </div>
                    </div>

                    <div className="row">
                        <label className="create-title">Password</label>
                        <div className="input-field col s12">

                        <input onChange={this.handleChanges} value={this.state.userImgUrl} name="userImgUrl" type="text" className="validate"/>
                        <label>User Image Url</label>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn #00695c teal darken-3">Create Account</button>

                </form>
        </div>
        )
    }
}

export default connect(null, { createAccount })(CreateAccount)
