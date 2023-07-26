import React, { useState, useEffect } from 'react';
import APIservice from '../APIService';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useCookies(['mytoken']);
  const [isLogin, setLogin] = useState(true);
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    if (token['mytoken']) {
      navigate('/articles'); // Use navigate() to redirect to the '/articles' route
    }
  }, [token, navigate]);

  const loginBtn = () => {
    APIservice.LoginUser({ username, password })
      .then(resp => {
        setToken('mytoken', resp.token);
      })
      .catch(error => {
        console.error('Login Error:', error);
      });
  };

  const registerBtn = () => {
    APIservice.RegisterUser({ username, password })
      .then(() => loginBtn()) // Automatically log in the user after successful registration
      .catch(error => console.log(error));
  };

  return (
    <div className='App'>
      <br />
      <br />
      {isLogin ? <h1>Login</h1> : <h1>Register</h1>}
      <br />
      <br />
      <div className='mb-3'>
        <label htmlFor='username' className='form-label'>
          Username
        </label>
        <input
          type='text'
          className='form-control'
          id='username'
          placeholder='Please enter username'
          value={username}
          onChange={e => setUserName(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={isLogin ? loginBtn : registerBtn} className='btn btn-primary'>
        {isLogin ? 'Login' : 'Register'}
      </button>
      <div className='mb-3'>
        <br/>
        {isLogin ? 
          <h5>You don't have an account, please <button className='btn btn-primary' onClick={() => setLogin(false)}>Sign up</button> here</h5>
          : <h5>If you have an account, <button className='btn btn-primary' onClick={() => setLogin(true)}>Login</button> here</h5>
        }
      </div>
    </div>
  );
}

export default Login;
