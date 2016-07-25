import React, { Component, PropTypes } from 'react';
import './styles.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header--bd">
          <a className="logo" href="/">
            <span className="logo--52">52</span>
            <span className="logo--dachu">dachu</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;