import React from 'react'
import { Wrapper, Container, Name, NavbarContent, Item } from './style.js'


const Navbar = () => {
  return (
    <Wrapper>
        <Container>
            <Name>João Silva</Name>
            <NavbarContent>
                <Item>Home</Item>
                <Item>About</Item>
                <Item>Contact me</Item>
            </NavbarContent>
        </Container>
    </Wrapper>
  )
}

export default Navbar