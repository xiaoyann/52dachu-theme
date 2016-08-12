import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './styles.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header--bd">
          <Link className="logo" to="/">
            <span className="logo--52">52</span>
            <span className="logo--dachu">dachu</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;