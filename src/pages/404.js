import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import _404 from "../images/404.png"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <img src={_404} alt="404"/>
  </Layout>
)

export default NotFoundPage
