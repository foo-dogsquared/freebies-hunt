// Credits:
// https://varun.ca/icon-component/
import React from 'react';
const files = require.context('../images/icons', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, className, style }) => (
  <svg className={ className } style={style}>
    <use xlinkHref={ `#${ type }` }></use>
  </svg>
);
console.log(files);
export default Icon;
