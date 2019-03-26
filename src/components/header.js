import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/freebies-hunt-logo.svg"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/" className="header-link">
      <svg>
        <use xlinkHref={`#${Logo.id}`}></use>
      </svg>
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
