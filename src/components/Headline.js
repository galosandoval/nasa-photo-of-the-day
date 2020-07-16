import React from 'react';

const Headline = (props) => {
  const img = props.data
  return (
    <img src ={img.url}className="nasaImg" alt="space in the background of a green hill" />
  )
}

export default Headline;

