import React from "react"
import { Link } from "gatsby"
import Icon from "../components/icon"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./category.scss"

const SecondPage = ({ pageContext: { name, category, nextCategory, previousCategory } }) => (
  <Layout color={category.main_color}>
    <SEO title={name} />
    <Icon type={ category.icon_name }/>
    <section className="category-info">
      <h1>{ name }</h1>
      <p>{ category.description }</p>
    </section>
    <ul className="freebies">
      {Object.values(category.children).map(item => {
        let description = null;
        let personalComment = null;

        if (item.description) {
          description = <p>{item.description}</p>;
        }

        if (item.personal_rating) {
          personalComment = <small><b>Personal comment:</b> {item.personal_rating}</small>
        }

        return <li className="freebie-item" key={item.id}>
          <h2><a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a></h2>
          {description}
          {personalComment}
        </li>
      })}
    </ul>

    <section className="other-categories">
      {(() => {
        let HTML = null;

        if (previousCategory) HTML += <big>{previousCategory}</big>
        if (nextCategory) HTML += <big>{nextCategory}</big>

        return HTML;
      })()}
      {previousCategory}
      {nextCategory}
    </section>
  </Layout>
)

export default SecondPage
