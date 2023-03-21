import React from 'react'
import { useState } from 'react'
import { BurguerButton, CloseButton,  NavbarContent, Item } from './style.js'
import { Link } from 'react-scroll'

const Burguer = () => {

    const [open, setOpen] = useState(false);

  return (
    <div>
        {!open ?( 
        <div>
        <BurguerButton onClick={()=>{setOpen(!open)}}/>
        <NavbarContent className="hidden">
                <Item><Link onClick={()=>{setOpen(!open)}} to="home"  spy={true} smooth={true} 
                            isDynamic={true} offset={-170} duration={500}>Home</Link></Item>
                <Item><Link onClick={()=>{setOpen(!open)}} to="about" spy={true} smooth={true} 
                            isDynamic={true} offset={-70} duration={500}>About</Link></Item>
                <Item><Link onClick={()=>{setOpen(!open)}} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact me</Link></Item>
        </NavbarContent>
        </div>
        )
        :(
        <div>
        <CloseButton  onClick={()=>{setOpen(!open)}}/>
        <NavbarContent>
                <Item><Link onClick={()=>{setOpen(!open)}} to="home"  spy={true} smooth={true} 
                            isDynamic={true} offset={-170} duration={500}>Home</Link></Item>
                <Item><Link onClick={()=>{setOpen(!open)}} to="about" spy={true} smooth={true} 
                            isDynamic={true} offset={-70} duration={500}>About</Link></Item>
                <Item><Link onClick={()=>{setOpen(!open)}} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact me</Link></Item>
        </NavbarContent>
        </div>)}
    </div>
  )
}

export default Burguer