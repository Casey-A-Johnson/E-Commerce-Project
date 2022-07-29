import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../Store';

const SignIn = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      alert('Invalid email or password');
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div style={{ width: '50%', margin: 'auto', marginTop: '100px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {/* <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="mb-3">
          New Customer?
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
