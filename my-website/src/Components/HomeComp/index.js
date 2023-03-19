import React from 'react'
import { Wrapper, Home, UnderText, WelcomeMessage, Redirect, LiLogo
  , Links, GhLogo, ProfilePic, Stack, StackItems, StackText, Separator, StackLogo, DownloadButton, 
  File, Container, DownloadLogo } from './style.js'
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
import download from '../../images/download.png'

const HomeComp = () => {
  return (
    <Wrapper id="home">
      <Home>
        <p>
        <WelcomeMessage>João Silva</WelcomeMessage>
        <UnderText>Software Engineering Student at Universidade do Minho</UnderText>
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
          <StackLogo className="react" src={react} alt="react logo"/>
          <StackLogo className="js" src={js} alt="JavaScript logo"/>
          <StackLogo className="java" src={java} alt="Java logo"/>
          <StackLogo className="python" src={python} alt="Python logo"/>
          <StackLogo className="mysql" src={mysql} alt="MySQL logo"/>
          <StackLogo className="c" src={c} alt="C logo"/>
        </StackItems>
      </Stack>
      
    </Wrapper>
  )
}

export default HomeComp