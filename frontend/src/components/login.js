import React, { useState, useEffect } from 'react';
import APIservice from '../APIService';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'; // Corrected import

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useCookies(['mytoken']);
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

  return (
    <div className='App'>
      <br />
      <br />
      <h1>Please Hallo</h1>
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
      <button onClick={loginBtn} className='btn btn-primary'>
        Login
      </button>
    </div>
  );
}

export default Login;
