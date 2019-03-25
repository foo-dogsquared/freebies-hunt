import React from "react"
import { Link } from "gatsby"

import CategoryIcon from "./categoryIcon"

import { kebabCase, generateStyleObject } from "../scripts"

import "./categoryCard.scss"

const categoryCard = ({ name, mainColor, iconName }) => (
  <div key={name} className="category-card" tabIndex="1">
    <Link className="category-link" to={`/${kebabCase(name)}`}>
      <div style={Object.assign(generateStyleObject(mainColor), {padding: `1.5em`})}>
        <CategoryIcon className="category-icon" type={iconName} />
      </div>
      <div className="description">{name}</div>
    </Link>
  </div>
)

export default categoryCard
