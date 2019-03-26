import React from "react"

import CategoryGrid from "../components/categoryGrid"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({pageContext: { categories }}) => (
  <Layout>
    <SEO title="Hub" keywords={[`freebies`, `digital-freebies`, `freebies-hunt`]} />
    <h1>Hi people and fellow freebie hunters <span role="img" aria-label="">👋</span></h1>
    <p>Welcome to my personal digital freebies list. Take a look around and see a glimpse of the world of open content (and free stuff) just laying around in the interwebs.</p>
    <CategoryGrid categories={categories} />
  </Layout>
)

export default IndexPage
