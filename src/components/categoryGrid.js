import React from "react"
import CategoryCard from "./categoryCard"
import color from "color"

import "./categoryGrid.scss"

const categoryGrid = ({ categories }) => {
  // TODO:
  // Make the categories to be an array
  // Sort them by their `mainColor`
  // Render the cards with the sorted by color list
  // PROFIT!

  categories.sort((current, next) => {
    // color instances
    const currentName = current.name.toLowerCase()
    const nextName = next.name.toLowerCase()
    if (currentName > nextName) {
      return 1;
    } else if (currentName < nextName) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <section className="categories-grid">
      {categories.map((category) => {
        return <CategoryCard key={category.name} name={category.name} mainColor={category.mainColor} iconName={category.iconName} />
      })}
    </section>
  )
}

export default categoryGrid
