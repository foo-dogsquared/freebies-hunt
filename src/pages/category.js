import React from "react"
import { Link } from "gatsby"
import CategoryGrid from "../components/categoryGrid"
import CategoryIcon from "../components/categoryIcon"
import marked from "marked"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./category.scss"
import { kebabCase } from "../scripts"

const SecondPage = ({ pageContext: { name, category, categorySet, recommendedCategories } }) => (
  <Layout color={category.main_color}>
    <SEO title={name} />
    <CategoryIcon type={ category.icon_name }/>
    <section className="category-info">
      <h1>{ name }</h1>
      <p dangerouslySetInnerHTML={{__html: marked(category.description)}}></p>
    </section>
    <ul className="freebies">
      {Object.values(category.children).map(item => {
        let description = null;
        let personalComment = null;

        if (item.description) {
          description = <p className="freebie-description" dangerouslySetInnerHTML={{__html: marked(item.description)}}></p>;
        }

        if (item.personal_rating) {
          personalComment = <small className="personal-comment" dangerouslySetInnerHTML={{__html: marked(item.personal_rating)}}></small>
        }

        return <li className="freebie-item" key={item.name}>
          <h2><a href={item.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{__html: marked(item.name)}}></a></h2>
          {description}
          {personalComment}
        </li>
      })}
    </ul>

    <section className="other-categories">
      <h3>Some other categories:</h3>
      <CategoryGrid categories={recommendedCategories} />
    </section>

    <details className="categories-index">
      <summary>Categories index:</summary>
      <section>
        {categorySet.map(category => {
          if (category === name) return <b>{category}</b>

          return <Link to={`/${kebabCase(category)}`}>{category}</Link>
        })}
      </section>
    </details>
  </Layout>
)

export default SecondPage
