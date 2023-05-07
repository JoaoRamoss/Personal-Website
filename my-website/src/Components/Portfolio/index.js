import React from 'react'
import { Wrapper, Title, SubTitle, Content, Box, Image, Info, BoxTitle, Desc, Quote,
   TitleSet, Tech, Tools, Code, GhLogo, Actions, Live, LiveLogo, BoxTitleWrapper } from './style.js'

import ghost from '../../images/ghost.png'
import ghlogo from '../../images/ghub.png'
import eas from '../../images/eas.png'
import fms from '../../images/fms.png'
import login from '../../images/Login.png'

const Portfolio = () => {
  return (
    <Wrapper id = 'portfolio'>
      <TitleSet>
        <Title>Portfolio</Title>
        <SubTitle>"The only way to do great work is to love what you do" <Quote>- Steve Jobs</Quote></SubTitle>
      </TitleSet>
      <Content>

      <Box>
          <Image src={login}/>
          <Info>
            <BoxTitleWrapper>
              <BoxTitle>RasBet</BoxTitle>
              <Tools>
                <Tech>React</Tech>
                <Tech>Python</Tech>
                <Tech>Flask</Tech>
              </Tools>
            </BoxTitleWrapper>
            <Desc>RasBet is a website that alows it's users to place bets on football matches. 
              Each user is able to deposit/withdraw fictional money from their account. This website was an assignment for a class and it was developed 
              in collaboration with 3 colleagues.
            </Desc>
            <Actions>
              <Code href="https://github.com/JoaoRamoss/RasBet" target="_blank">Code <GhLogo src={ghlogo}/></Code>
            </Actions>
          </Info>
        </Box>

        <Box className="reverse">
          <Image src={ghost}/>
          <Info>
            <BoxTitleWrapper>
              <BoxTitle>Ghost</BoxTitle>
              <Tools>
                <Tech>Ansible</Tech>
                <Tech>Kubernetes</Tech>
                <Tech>Google Cloud</Tech>
              </Tools>
            </BoxTitleWrapper>
            <Desc>Automatization of the Ghost app's deployment and monitoring</Desc>
            <Actions className='ghost'>
              <Code href="https://github.com/JoaoRamoss/trabalho-ASCN" target="_blank">Code <GhLogo src={ghlogo}/></Code>
            </Actions>
          </Info>
        </Box>

        <Box>
          <Image src={eas}/>
          <Info>
            <BoxTitleWrapper>
              <BoxTitle>Etch-a-sketch</BoxTitle>
              <Tools>
                <Tech>JavaScript</Tech>
                <Tech>HTML</Tech>
                <Tech>CSS</Tech>
              </Tools>
            </BoxTitleWrapper>
            <Desc>Etch-a-sketch is an interactive page where you can draw on a canvas. The user can change the canvas' resolution to fit their needs.</Desc>
            <Actions>
              <Code href="https://github.com/JoaoRamoss/Etch-a-sketch" target="_blank">Code <GhLogo src={ghlogo}/></Code>
              <Live href="https://etch-a-sketch-ramux.netlify.app/" target="_blank"> Live Demo <LiveLogo/></Live>
            </Actions>
          </Info>
        </Box>

        <Box className="reverse">
          <Image src={fms}/>
          <Info>
            <BoxTitleWrapper>
              <BoxTitle>Football matches simulator</BoxTitle>
              <Tools>
                <Tech>Java</Tech>
              </Tools>
            </BoxTitleWrapper>
            <Desc>Project developed during the Object-Oriented Programming class. The program reads information 
              about all the teams and players from a provided CSV file and simulates matches between them.</Desc>
            
            <Actions>
              <Code href="https://github.com/JoaoRamoss/ProjetoPOO" target="_blank">Code <GhLogo src={ghlogo}/></Code>
            </Actions>
          </Info>
        </Box>
      </Content>
    </Wrapper>
  )
}

export default Portfolio