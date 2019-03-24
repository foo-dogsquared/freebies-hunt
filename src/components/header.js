import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/freebies-hunt-logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexFlow: `column wrap`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <Link to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            display: `flex`,
            flexFlow: `column wrap`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
      >
        <svg>
          <use xlinkHref={`#${Logo.id}`}></use>
        </svg>
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
