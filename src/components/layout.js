/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { generateStyleObject } from "../scripts"

// importing of the usual configuration
import config from "../config"

// import of components
import Header from "./header"
import UserLinks from "./userLinks"
import "./layout.scss"

const Layout = ({ children, color }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            author,
            mainSite
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
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
                Freebies Hunt is a resource list gathered by <a href={data.site.siteMetadata.mainSite} target="_blank" rel="noopener noreferrer">@{data.site.siteMetadata.author}</a> after having a stroke with open content enthusiasm.
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
            <UserLinks />
            <footer>
              <div>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
              <div>
                Also built with <span role="img" aria-label="">💙</span> by <a href={data.site.siteMetadata.mainSite}>me</a>, I think.
              </div>
            </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.defaultProps = {
  color: "#722a13"
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
