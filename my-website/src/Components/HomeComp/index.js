import React from 'react'
import { Wrapper, Home, UnderText, WelcomeMessage, Redirect, LiLogo
  , Links, GhLogo, ProfilePic, Stack, StackItems, StackText, Separator, StackLogo, DownloadButton, 
  File, Container, Wave, Display } from './style.js'
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
  return (
    <Wrapper id="home">
      <Home>
        <p>
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
        </p>
        <Container>
          <ProfilePic src={profile} alt="Profile picture"/>
          <File href={resume} download="Joao-Silva"><DownloadButton>Download CV</DownloadButton></File>
        </Container>
      </Home>
      <Stack>
        <StackText>Tech Stack</StackText>
        <Separator/>
        <StackItems>
          <Display><StackLogo className="react" src={react} alt="react logo"/></Display>
          <Display><StackLogo className="js" src={js} alt="JavaScript logo"/></Display>
          <Display><StackLogo className="java" src={java} alt="Java logo"/></Display>
          <Display><StackLogo className="python" src={python} alt="Python logo"/></Display>
          <Display><StackLogo className="mysql" src={mysql} alt="MySQL logo"/></Display>
          <Display><StackLogo className="c" src={c} alt="C logo"/></Display>
        </StackItems>
      </Stack>
      
    </Wrapper>
  )
}

export default HomeComp