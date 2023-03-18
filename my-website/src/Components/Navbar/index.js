import React, { useEffect } from 'react'
import { Wrapper, Container, Name, NavbarContent, Item } from './style.js'
import { useState } from 'react'


const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 563);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 563);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia); 
  })

  return (
    <Wrapper>
        <Container>
            <Name>João Silva</Name>
            {isDesktop && (
            <NavbarContent>
                <Item>Home</Item>
                <Item>About</Item>
                <Item>Contact me</Item>
            </NavbarContent>
            )}
        </Container>
    </Wrapper>
  )
}

export default Navbar