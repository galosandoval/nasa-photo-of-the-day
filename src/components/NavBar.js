import React from 'react';
import styled, { keyframes } from 'styled-components'; 

const StyledNav = styled.a`
  text-decoration: none;
  padding: 2% 4% 0% 4%;
  color: brown;
  border-bottom: 1px solid black;
`

const NavBar = (props) => {
  return (
    <nav>
      <StyledNav href="#">Home</StyledNav>
      <StyledNav href="#">Contact</StyledNav>
      <StyledNav href="#">About</StyledNav>
      <StyledNav href="#">More Pictures</StyledNav>
    </nav>
  )
}

export default NavBar