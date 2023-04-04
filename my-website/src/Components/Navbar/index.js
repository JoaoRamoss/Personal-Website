import React, { useEffect } from 'react'
import { Wrapper, Container, Name, NavbarContent, Item } from './style.js'
import { useState } from 'react'
import { Link } from 'react-scroll'
import Burguer from '../Burguer/index.js'


const Navbar = () => {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 855);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 855);
  }

  //Check if window size is larger than threshold (855px). Doesn't render NavbarContent in case it crosses threshold
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia); 
  });

  return (
    <Wrapper>
        <Container>
            <Name>João Silva</Name>
            {isDesktop ? (
            <NavbarContent>
                <Item><Link to="home"  spy={true} smooth={true} 
                            isDynamic={true} offset={-170} duration={500}>Home</Link></Item>
                <Item><Link to="about" spy={true} smooth={true} 
                            isDynamic={true} offset={-70} duration={500}>About</Link></Item>
                <Item><Link to="portoflio" spy={true} smooth={true} 
                            isDynamic={true} offset={-70} duration={500}>Portfolio</Link></Item>
                <Item><Link isDynamic={true} to="contact" spy={true} smooth={true} offset={-170} duration={500}>Contact me</Link></Item>
            </NavbarContent>
            ):
            <Burguer/>
            }
        </Container>
    </Wrapper>
  )
}

export default Navbar