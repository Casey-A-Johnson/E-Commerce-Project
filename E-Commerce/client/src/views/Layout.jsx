import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';

const Layout = (props) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Name of Website
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {userInfo ? (
                  <li className="nav-item dropdown">
                    <p
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="nav-link dropdown-toggle active"
                    >
                      {userInfo.name}
                    </p>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="nav-link active" to="/profile">
                          User Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link active" to="orderhistory">
                          Order History
                        </Link>
                      </li>
                      <li style={{ borderTop: '1px solid black' }}>
                        <Link
                          className="nav-link"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>Shirts</li>
                  <li>Pants</li>
                </ul>
              </li>
            </ul>
            <form
              className="d-flex "
              role="search"
              style={{ gap: '10px', alignItems: 'center' }}
            >
              <Link
                style={{ marginRight: '30px' }}
                className="nav-link"
                to="/api/cart"
              >
                Cart
                {cart.cartItems.length > 0 && (
                  <span className="badge text-bg-danger">
                    {cart.cartItems.length}
                  </span>
                )}
              </Link>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>{props.children}</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        {/* <p> All rights reserved</p> */}
      </div>
    </div>
  );
};

export default Layout;
