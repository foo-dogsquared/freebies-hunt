import React from "react"

/**
 * Simply a wrapper component for external links.
 * @param {String} className - list of class names separated by whitespace
 * @param {Object} style - apply JSX stylings
 * @param {String} href
 * @param {*} children
 * @param {*} value - the text to be inserted inside the anchor node; take note that once there is a value for children, it'll be overriden
 */
const ExternalLink = ({ className, style, href, children, value, dangerouslySetInnerHTML }) => {
  const valueToBePut = children || value;

  return (
    <a href={ href } className={ className } style={ style } dangerouslySetInnerHTML={ dangerouslySetInnerHTML } target="_blank" rel="noopener noreferrer">{ valueToBePut }</a>
  )
}

export default ExternalLink;
