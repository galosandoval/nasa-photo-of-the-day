import React from "react";
import Headline from './components/Headline'

const MainBody = (props) => {
 const data = props
  return (
    <div className="title">
      {data.title}
      <Headline  data={data} />
      
    </div>
  )

}

export default MainBody;