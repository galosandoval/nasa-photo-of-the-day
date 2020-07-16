import React from "react";
import Headline from '../components/Headline.js'
import Footer from '../components/Footer.js'

const MainBody = (props) => {
 const data = props.data
 console.log(data)
 console.log(props.data)
  return (
    <div className="title">
      {console.log(data)}
      {data.title}
      <Headline  data={data} />
      <Footer data={data} />

      
    </div>
  )

}

export default MainBody;