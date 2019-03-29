import React from "react"
import CategoryCard from "./categoryCard"

import "./categoryGrid.scss"

const categoryGrid = ({ categories }) => (
  <section className="categories-grid">
    {Object.keys(categories).map((name, keyIndex) => {
      const category = categories[name];
      return <CategoryCard key={name} name={name} mainColor={category.main_color} iconName={category.icon_name} />
    })}
  </section>
)

export default categoryGrid
