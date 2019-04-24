import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo'
import Layout from '../components/layout';
import Icon from "../components/icon";
import CategoryGrid from "../components/categoryGrid"
import marked from "marked";
import { kebabCase } from "../scripts"

import "./category.scss";

export default ({ pageContext: { name, category, categories } }) => {
  const recommendedCategories = {};
  const categorySet = Object.keys(categories);
  while (Object.keys(recommendedCategories).length <= 2) {
    const randomCategory = categorySet[Math.floor(Math.random() * categorySet.length)];
    if (randomCategory === name) continue;

    recommendedCategories[randomCategory] = categories[randomCategory];
  }

  return (
  <Layout color={ category.mainColor }>
    <SEO title={name} keywords={[ category.iconName, name ]}/>
    <Icon file="category-icons" name={ category.iconName }/>
    <section className="category-info">
      <h1>{ name }</h1>
      <p dangerouslySetInnerHTML={{__html: marked(category.description)}}></p>
    </section>
    <ul className="freebies">
      {category.children.map(item => {
        let description = null;
        let personalComment = null;

        if (item.description) {
          description = <p className="freebie-description" dangerouslySetInnerHTML={{__html: marked(item.description)}}></p>;
        }

        if (item.personal_rating) {
          personalComment = <small className="personal-comment" dangerouslySetInnerHTML={{__html: marked(item.personal_rating)}}></small>
        }

        return (
          <li className="freebie-item" key={item.name}>
            <h2><a href={item.link} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{__html: marked(item.name)}}></a></h2>
            {description}
            {personalComment}
          </li>
        )
      })}
    </ul>

    <section className="other-categories">
      <h3>Some other categories:</h3>
      <CategoryGrid categories={Object.values(recommendedCategories)} />
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
}
