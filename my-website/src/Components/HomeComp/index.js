import React from 'react'
import { Wrapper, Home, UnderText, WelcomeMessage, Redirect, LiLogo
  , Links, GhLogo, ProfilePic, Stack, StackItems, StackText, Separator, StackLogo, DownloadButton, 
  File, Container, Wave, Display } from './style.js'
import { useState, useEffect } from 'react'
import { Tooltip } from 'react-tooltip'

import 'react-tooltip/dist/react-tooltip.css'
import lkdin from '../../images/linkedin.png'
import ghub from '../../images/ghub.png'
import profile from '../../images/profile.jpeg'
import java from '../../images/java.png'
import js from '../../images/js.png'
import react from '../../images/react.png'
import python from '../../images/python.png'
import mysql from '../../images/mysql.png'
import c from './../../images/c.png'
import resume from '../../images/Joao_Silva.pdf'
import wave from '../../images/wave.png'

const HomeComp = () => {
  // I don't want to enable downloadable CV yet.
  const renderCV = false; //When set to {true} -> Renders button that downloads my CV when pressed.
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 855);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 855);
  }

    //Check if window size is larger than threshold (855px). Doesn't render NavbarContent in case it crosses threshold
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia); 
    }, [isDesktop]);

  return (
    <Wrapper id="home">
      <Home>
        <div>
          <WelcomeMessage>Hi<Wave src={wave}/><br/> I'm João</WelcomeMessage>
          <UnderText>Software Engineering Student at Universidade do Minho <br/>based in Fafe, Portugal 📍</UnderText>
          <Links>
            <Redirect href="https://www.linkedin.com/in/joaosilva05/" target="_blank" rel="noreferrer">
              <LiLogo src={lkdin} alt="LinkedIn Logo"/>
            </Redirect>
            <Redirect href="https://github.com/joaoramoss" target="_blank" rel="noreferrer">
              <GhLogo src={ghub} alt="Github Logo"/>
            </Redirect>
          </Links>
        </div>
        <Container>
          <ProfilePic src={profile} alt="Profile picture"/>
          { isDesktop && renderCV &&
          <File href={resume} download="Joao-Silva"><DownloadButton>Download CV</DownloadButton></File>
          }
        </Container>
      </Home>
      <Stack>
        <StackText>Tech Stack</StackText>
        <Separator/>
        <StackItems>
          <Tooltip id="my-tooltip"/>
          <Display><StackLogo data-tooltip-id="my-tooltip" 
                              data-tooltip-content="React" 
                              data-tooltip-place="bottom" className="react" src={react} alt="react logo"/></Display>
          <Display><StackLogo data-tooltip-id="my-tooltip" 
                              data-tooltip-content="JavaScript" 
                              data-tooltip-place="bottom" className="js" src={js} alt="JavaScript logo"/></Display>
          <Display><StackLogo data-tooltip-id="my-tooltip" 
                              data-tooltip-content="Java" 
                              data-tooltip-place="bottom" className="java" src={java} alt="Java logo"/></Display>
          <Display><StackLogo data-tooltip-id="my-tooltip" 
                              data-tooltip-content="Python" 
                              data-tooltip-place="bottom" className="python" src={python} alt="Python logo"/></Display>
          <Display><StackLogo data-tooltip-id="my-tooltip" 
                              data-tooltip-content="MySQL" 
                              data-tooltip-place="bottom" className="mysql" src={mysql} alt="MySQL logo"/></Display>
          <Display><StackLogo data-tooltip-id="my-tooltip" 
                              data-tooltip-content="C" 
                              data-tooltip-place="bottom"
                              className="c" src={c} alt="C logo"/></Display>
        </StackItems>
      </Stack>
    </Wrapper>
  )
}

export default HomeComp