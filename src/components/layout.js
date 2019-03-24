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

import Header from "./header"
import "./layout.scss"

const Layout = ({ children, color }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
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
            <footer>
              <div>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
              <div>
                Also built by <a href={data.site.siteMetadata.gitHubLink}>me</a>, I think.
              </div>
            </footer>
          </div>
        </div>
      </>
    )}
  />
)

Layout.defaultProps = {
  color: "#b3411d"
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
