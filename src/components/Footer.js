import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledP = styled.p`
  line-height: 1.5rem;
`

const Footer = (props) => {
  const text = props.data
  return (

    <StyledP className="text">
      {text.explanation}
    </StyledP>
  )
}

export default Footer;