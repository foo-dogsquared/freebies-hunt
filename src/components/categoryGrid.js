import React from "react"
import CategoryCard from "./categoryCard"
import color from "color"

import "./categoryGrid.scss"

const categoryGrid = ({ categories }) => {
  return (
    <section className="categories-grid">
      {categories.map((category) => {
        return <CategoryCard key={category.name} name={category.name} mainColor={category.mainColor} iconName={category.iconName} />
      })}
    </section>
  )
}

export default categoryGrid
