import React from 'react';

const Footer = (props) => {
  const text = props.data
  return (
    <div className="text">
      {text.explanation}
    </div>
  )
}

export default Footer;