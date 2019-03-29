import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/freebies-hunt-logo.svg"

import "./header.scss"

const Header = ({ siteTitle }) => {
  return (<header>
    <Link to="/" className="header-link">
      <Logo />
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
    </Link>
  </header>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
