import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ isLoggedIn, handleLogout, handleLogin }) => {

    if (isLoggedIn) {
        return <div>
            <h1>You are logged in!</h1>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <hr />
            <button onClick={handleLogout}>Logout</button>
        </div>
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <label>UserName:</label>
                <input type='text' placeholder='RonBurgondy' name='username' />
                <label>Password:</label>
                <input type='password' name='password' />
                <button type='submit' >Submit</button>
            </form>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/signup'>Signup</Link>
            </div>
        </div>
    );
};

export default Login;
