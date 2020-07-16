import React from 'react';

const Headline = (props) => {
  const img = props.data
  return (
    <div className="nasaImg">
      {img.url}
    </div>
  )
}

export default Headline;

