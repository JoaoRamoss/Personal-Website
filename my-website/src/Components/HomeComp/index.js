import React from 'react'
import { Wrapper, Home, UnderText, WelcomeMessage, Redirect, LiLogo, About, Header, Links, GhLogo, ProfilePic } from './style.js'
import lkdin from '../../images/linkedin.png'
import ghub from '../../images/ghub.png'
import profile from '../../images/profile.jpeg'

const HomeComp = () => {
  return (
    <Wrapper id="home">
      <Home>
        <p>
        <WelcomeMessage>João Silva</WelcomeMessage>
        <UnderText>Software Engineering Student at Universidade do Minho</UnderText>
        </p>
        <ProfilePic src={profile} alt="Profile picture"/>
      </Home>
      <Links>
          <Redirect href="https://www.linkedin.com/in/joaosilva05/" target="_blank" rel="noreferrer">
            <LiLogo src={lkdin} alt="LinkedIn Logo"/>
          </Redirect>
          <Redirect href="https://github.com/joaoramoss" target="_blank" rel="noreferrer">
            <GhLogo src={ghub} alt="Github Logo"/>
          </Redirect>
        </Links>
    </Wrapper>
  )
}

export default HomeComp