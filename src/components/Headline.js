import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledImg = styled.div`
  img {
    height: 90vh;
  }
`

const Headline = (props) => {
  const img = props.data
  return (
    <StyledImg>
    <img src ={img.url} className="nasaImg" alt="space in the background of a green hill" />
    </StyledImg>
  )
}

export default Headline;

