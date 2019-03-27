// Credits:
// https://varun.ca/icon-component/
import React from 'react';
const files = require.context('../images/social-icons', false, /.*\.svg$/);
files.keys().forEach(files);

const socialIcon = ({ name, className, style }) => (
  <svg className={ className } style={style}>
    <use xlinkHref={ `#${ name }` }></use>
  </svg>
);

export default socialIcon;
