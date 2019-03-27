// Credits:
// https://varun.ca/icon-component/
import React from 'react';
const files = require.context('../images/category-icons', false, /.*\.svg$/);
files.keys().forEach(files);

const categoryIcon = ({ type, className, style }) => (
  <svg className={ className } style={style}>
    <use xlinkHref={ `#${ type }` }></use>
  </svg>
);

export default categoryIcon;
