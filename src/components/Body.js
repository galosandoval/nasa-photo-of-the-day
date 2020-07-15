import React from 'react'
import Header from './components/Header.js'

const Body = (props) => {
  const { nasaData } = props;
  return (
    <div className="title">
      <Header key={nasaData.title} />
      
    </div>
  )

}

export default Body;