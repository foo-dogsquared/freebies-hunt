import React from "react"
import { Link } from "gatsby"
import tinycolor from "tinycolor2"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase, generateStyleObject } from "../scripts"

import "./categories.scss"
import Icon from "../components/icon"

const IndexPage = ({pageContext: { categories }}) => (
  <Layout>
    <SEO title="Hub" keywords={[`freebies`, `digital-freebies`, `freebies-hunt`]} />
    <h1>Hi people</h1>
    <p>Welcome to my personal digital freebies list. Take a look around and see a glimpse of the world of open content (and free stuff) just laying around in the interwebs.</p>
    <section className="categories-grid">
      {Object.entries(categories).map((entry) => {
        const name = entry[0];
        const category = entry[1];

        return <div key={name} className="category-card" tabIndex="1">
          <Link className="category-link" to={`/${kebabCase(name)}`}>
            <div style={Object.assign(generateStyleObject(category.main_color), {padding: `1.5em`})}>
              <Icon type={category.icon_name} />
            </div>
            <div className="description">{name}</div>
          </Link>
        </div>
      })}
    </section>
  </Layout>
)

export default IndexPage
