import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from "./logIn";
import FriendsList from './friendsList';
import PrivateRoute from './privateRoute';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = { credentials: {} }
  }


  render() {
    return (
      <div className="App">
        <Router>
          <div className="nav">
            <Link to='/'><h2>Home</h2></Link>
            <Link to='/login'><h2>Login</h2></Link>
            <Link to='/friends-list'><h2>View Friends</h2></Link>
            <Link to='/add-friend'><h2>Add Friend</h2></Link>

          </div>

          <Switch>
            <Route exact path='/login' component={ Login } />
            <PrivateRoute exact path='/friends-list' component={FriendsList} />

          </Switch>
        </Router>
      </div> 
    );
  }

}

export default App;
