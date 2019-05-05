import React from 'react';
import { Link } from 'gatsby';

// npm scripts
import marked from "marked";

// custom scripts
import { kebabCase } from "../scripts"

// components
import SEO from '../components/seo'
import Layout from '../components/layout';
import Icon from "../components/icon";
import CategoryGrid from "../components/categoryGrid"
import FreebieSearchInterface from "../components/freebieSearchInterface"

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
    <FreebieSearchInterface freebies={ category.children } />

    <section className="other-categories">
      <h3>Some other categories:</h3>
      <CategoryGrid categories={Object.values(recommendedCategories)} />
    </section>

    <details className="categories-index">
      <summary>Categories index:</summary>
      <nav>
        {categorySet.map(category => {
          if (category === name) return <b key={category}>{category}</b>

          return <Link to={`/${kebabCase(category)}`} key={category}>{category}</Link>
        })}
      </nav>
    </details>
  </Layout>
  )
}
