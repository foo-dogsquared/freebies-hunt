import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ pageContext: { items, category } }) => (
  <Layout>
    <SEO title={category} />
    <h1>{ category }</h1>
    {Object.values(items).map(item => {
      return <li key={item.id}><a href={item.url}>{item.name}</a> {(item.description) ? '| ' + item.description : ''}</li>
    })}
  </Layout>
)

export default SecondPage
