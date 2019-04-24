import React from "react";

const textInput = ({ description, className, style, value }) => {
  return (
    <div>
      <small>{ description }</small>
      <input className={ className } style={ style } value={ value } />
    </div>
  )
}

export default textInput;
