import React from 'react';
import './Header.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Link as Href } from 'react-router-dom';

function Header(props) {
  // PROPS
  // this.ptops.title (from App)

  const jsx = (
    <div className="head">
      <h1>{props.title}</h1>
      <div className="flex-row">
        <Href to="/" className="flex-unit">Home</Href>
        <Href to="/about" className="flex-unit">About</Href>
      </div>
    </div>
  );
  
  return jsx;
}

export default Header;