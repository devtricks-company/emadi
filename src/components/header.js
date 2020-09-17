
import PropTypes from "prop-types"
import React from "react";
import logo from '../images/logo.png';
import searchLogo from '../images/searchicon.png';
import barIcons from '../images/bar-icons.png';

const Header = ({ siteTitle }) => (
  <nav id="navbar">
     
        <a href="/" className="navbar-brand">
          <img src={logo} alt="sanaz emadi"/>
        </a>
        <h1>دکتر ساناز عمادی</h1>
        <div>
          <a href="/">
            <img src={searchLogo} alt="sanaz emadi"/>
          </a>
          <a href="/">
            <img src={barIcons} alt="sanaz emadi"/>
          </a>
        </div>
     
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
