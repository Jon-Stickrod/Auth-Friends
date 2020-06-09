import React from 'react';
import axiosWithAuth from './utils/axiosWithAuth';

function LogIn() {
    return(
    <div className="logIn">
        <form >
          <input
            type="text"
            name="username"
          />
          <input
            type="password"
            name="password"
          />
          <button>Log in</button>
        </form>
    </div>
    );
}

export default LogIn;