import React from "react";
import Headline from '../components/Headline.js'
import Footer from '../components/Footer.js'
import NavBar from '../components/NavBar.js'
import styled, { keyframes } from 'styled-components';

const StyledDetails = styled.section`
  background-color : peachpuff;
  
`

const MainBody = (props) => {
 const data = props.data
 console.log(data)
 console.log(props.data)
  return (
    <StyledDetails className="nav">
      <NavBar />
   
    <div className="title">
      {console.log(data)}
      {data.title}
    <div>
      <Headline  data={data} />
    
    <div className="pic">
      
      <Footer data={data} />

      </div>
    </div>
    </div>
    </StyledDetails>
  )

}

export default MainBody;