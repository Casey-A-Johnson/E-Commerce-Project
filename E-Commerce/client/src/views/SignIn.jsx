import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SignIn = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <div style={{ width: '50%', margin: 'auto', marginTop: '100px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign In</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
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
