import React from 'react';

/**
 * Icon Component
 * @param {String} file - the name of the SVG (from `static` directory)
 * @param {String} name - the name of the <symbol> to be used
 * @param {String} className - an array of classes to be styled with the component
 * @param {String} style - the inline CSS style
 * 
 * @result {JSX Component}
 */
const icon = ({ file, name, className, style }) => {
  return (
    <svg className={className} style={style}>
      <use href={`${file}.svg#${name}`}></use>
    </svg>
  )
}

// export it
export default icon;