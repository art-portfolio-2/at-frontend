import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import Nav from './components/layout/Nav'
import SignIn from './components/auth/SignIn';
import CreateAccount from './components/auth/CreateAccount';
import Posts from './components/posts/Posts';
import CreatePost from './components/posts/CreatePost';
import Landing from './components/layout/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Landing}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/createaccount" component={CreateAccount}/>
        <Route path="/user/:id" component={Posts}/>
        <Route path="/createpost" component={CreatePost}/>
        <Route path="/updatepost" component={CreatePost}/>
      </div>
    );
  }
}

export default App;
