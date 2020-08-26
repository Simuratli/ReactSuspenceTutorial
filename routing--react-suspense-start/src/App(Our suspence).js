import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import User from './containers/User';
import Welcome from './containers/Welcome';
import suspense from './containers/suspense'

const AsyncPost = suspense(()=>{
  return import('./containers/Posts')
})


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />
          <Route path="/posts" component={AsyncPost} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
