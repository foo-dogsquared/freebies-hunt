import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "../scripts"

const IndexPage = ({pageContext: { categories }}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    {categories.map(category => {
      return <div><Link to={`/${kebabCase(category)}`}>{category}</Link></div>
    })}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
