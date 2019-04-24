import React from 'react';
import SEO from "../components/seo"
import CategorySearchGrid from "../components/categorySearchEngine";

import Layout from "../components/layout"

export default ({ pageContext: { categories } }) => (
  <Layout>
    <SEO title="Hub" keywords={[ "freebies-hunt", "freebies"]} />
    <h1>Hello, fellow freebie hunters <span role="img" aria-label="">👋</span></h1>
    <p>Welcome to my personal freebies hunting list. Take a look around and see a glimpse of the world of open content (and free stuff) just laying around in the interwebs.</p>
    <CategorySearchGrid categories={categories} />
  </Layout>
);
