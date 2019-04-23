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

  const mapOfCategories = Object.keys(categories);

  mapOfCategories.sort((current, next) => {
    const currentCategoryObject = categories[current];
    const nextCategoryObject = categories[next];

    // color instances
    const currentCategoryColor = color(currentCategoryObject.main_color);
    const nextCategoryColor = color(nextCategoryObject.main_color);

    if (currentCategoryColor.hue() > nextCategoryColor.hue()) {
      return 1;
    } else if (currentCategoryColor.hue() < nextCategoryColor.hue()) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <section className="categories-grid">
      {mapOfCategories.map((name) => {
        const category = categories[name];
        return <CategoryCard key={name} name={name} mainColor={category.main_color} iconName={category.icon_name} />
      })}
    </section>
  )
}

export default categoryGrid
