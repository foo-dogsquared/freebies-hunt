/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { generateStyleObject } from "../scripts"

// importing of the usual configuration
import config from "../config"

// import of components
import Header from "./header"
import Footer from "./footer"
import UserLinks from "./userLinks"
import "./layout.scss"

// import of image
import ArrowUpLogo from "../images/arrow-up.svg"

const Layout = ({ children, color }) => (
  <>
    <Header siteTitle={config.title} />
    <div className="elliptical-border"
      style={generateStyleObject(color)}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
        >
        <main>{children}</main>
        <section className="about">
          <h2>What is Freebies Hunt?</h2>
          <p>
            Freebies Hunt is a programmer-oriented and a personal resource list gathered by <a href={config.mainSite} target="_blank" rel="noopener noreferrer">@{config.author.alias}</a> after having a stroke with open content enthusiasm.
            This'll help you in finding quality free (and open source) resources to get started doing on your projects (or learnings).
          </p>
          <p>
            Freebies Hunt is also an open source website which you can see the source code for it right <a href={config.repoLink} target="_blank" rel="noopener noreferrer">here</a>.
            Of course, feedbacks and contributions are welcome! 🤗
          </p>
          <h2>Got API?</h2>
          <p>
            If you are looking for an API of this site (for some reason) to get its data, you're in luck! It's available as <a href={config.api.link} target="_blank" rel="noopener noreferrer">an npm package</a>. You could also see the remote repo of it in <a href={config.api.link} target="_blank" rel="noopener noreferrer">this link</a>.
          </p>
        </section>
        <UserLinks userLinks={config.socialLinks} />
        <Footer />
      </div>
    </div>
    <a class="go-to-top" href="#top"><ArrowUpLogo /></a>
  </>
)

Layout.defaultProps = {
  color: config.mainColor
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
