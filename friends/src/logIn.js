import React from 'react';
import axiosWithAuth from './utils/axiosWithAuth';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      credentials: {
        username: '',
        password: ''
      }
    }
  }

  handleChange = e => {
    this.setState({credentials: {
      ...this.state.credentials,
      [e.target.name]: e.target.value
    }});
    console.log(this.state.credentials);
  }

  handleSubmit = e => {
    e.preventDefault();
      this.setState({...this.state, isLoading: true});

      axiosWithAuth().post('/api/login', this.state.credentials)
      .then( res => {
        window.localStorage.setItem('token', res.data.payload);
        this.setState({...this.state, isLoading: false});
        this.props.history.push('/protected');
      })
      .catch(err => {
        console.log(err);
        alert("unable to sign in");
        this.setState({...this.state, isLoading: false});
      })
  }


    render() {
      return(
        <div className="logIn">
          <h2>Log In</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onSubmit={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onSubmit={this.handleChange}
              />
              <button>Log in</button>
            </form>
            {this.state.isLoading && <div><h3>Logging in</h3></div>}
        </div>
      )
    }

}

export default Login;