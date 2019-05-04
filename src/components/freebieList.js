import React from "react"

// npm scripts
import marked from "marked"

// components
import ExternalLink from "./externalLink"

// CSS stylings
import "./freebieList.scss"

const FreebieList = ({ freebies }) => {
  return (
    <ul className="freebies">
      {freebies.map(item => {
        let description = null;
        let personalComment = null;

        if (item.description) {
          description = <p className="freebie-description" dangerouslySetInnerHTML={{__html: marked(item.description)}}></p>;
        }

        if (item.personalComment) {
          personalComment = (
            <details className="personal-comment">
              <summary>Personal comment:</summary>
              <p dangerouslySetInnerHTML={{__html: marked(item.personalComment)}}></p>
            </details>
          )
        }

        return (
          <li className="freebie-item" key={item.name}>
            <h2><ExternalLink href={item.url} dangerouslySetInnerHTML={{__html: marked(item.name)}} /></h2>
            {description}
            {personalComment}
          </li>
        )
      })}
    </ul>
  )
}

export default FreebieList;
