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
import UserLinks from "./userLinks"
import "./layout.scss"

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
          <p>
            Freebies Hunt is a resource list gathered by <a href={config.mainSite} target="_blank" rel="noopener noreferrer">@{config.author.alias}</a> after having a stroke with open content enthusiasm.
            This'll help you in finding quality free (and open source) resources to get started doing on your projects (or learnings).
          </p>
          <p>
            Freebies Hunt is an open source website which you can see the source code for it right <a href={config.repoLink} target="_blank" rel="noopener noreferrer">here</a>.
            Of course, feedbacks and contributions are welcome! 🤗
          </p>
          <p>
            If you are looking for an API of this site to get its data, you're in luck! It's available as an npm package. You could also see the remote repo of it in <a href={config.apiRepoLink} target="_blank" rel="noopener noreferrer">this link</a>.
          </p>
        </section>
        <UserLinks userLinks={config.socialLinks} />
        <footer>
          <div>
            Built with <span role="img" aria-label="">💙</span> by <a href={config.mainSite}>{config.author.name}</a>, I think.
          </div>
          <div>
            © {new Date().getFullYear()} Licensed with <a href={config.license.link}>{config.license.name}</a>
          </div>
        </footer>
      </div>
    </div>
  </>
)

Layout.defaultProps = {
  color: config.mainColor
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
