import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
      <header>
        <Link to="/">Navbar</Link>
      </header>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
