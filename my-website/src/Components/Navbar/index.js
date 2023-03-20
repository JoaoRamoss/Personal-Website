import React, { useEffect } from 'react'
import { Wrapper, Container, Name, NavbarContent, Item } from './style.js'
import { useState } from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 835);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 835);
  }

  //Check if window size is larger than threshold (563px). Doesn't render NavbarContent in case it crosses threshold
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia); 
  }, [isDesktop]);


  return (
    <Wrapper>
        <Container>
            <Name>João Silva</Name>
            {isDesktop && (
            <NavbarContent>
                <Item><Link to="home"  spy={true} smooth={true} 
                            isDynamic={true} offset={-170} duration={500}>Home</Link></Item>
                <Item><Link to="about" spy={true} smooth={true} 
                            isDynamic={true} offset={-70} duration={500}>About</Link></Item>
                <Item><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact me</Link></Item>
            </NavbarContent>
            )}
        </Container>
    </Wrapper>
  )
}

export default Navbar