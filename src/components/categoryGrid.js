import React from "react"
import CategoryCard from "./categoryCard"

import "./categoryGrid.scss"

const categoryGrid = ({ categories }) => (
  <section className="categories-grid">
    {Object.entries(categories).map((entry) => {
      const name = entry[0];
      const category = entry[1];
      return <CategoryCard key={name} name={name} mainColor={category.main_color} iconName={category.icon_name} />
    })}
  </section>
)

export default categoryGrid
