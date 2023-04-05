import React from 'react'
import { Wrapper, Title, SubTitle, Content, Box, Image, Info, BoxTitle, Desc, Quote,
   TitleSet, Tech, Tools, Code, GhLogo, Actions, Live, LiveLogo } from './style.js'

import ghost from '../../images/ghost.png'
import ghlogo from '../../images/ghub.png'
import eas from '../../images/eas.png'
import fms from '../../images/fms.png'

const Portfolio = () => {
  return (
    <Wrapper id = 'portfolio'>
      <TitleSet>
        <Title>Portfolio</Title>
        <SubTitle>"The only way to do great work is to love what you do" <Quote>- Steve Jobs</Quote></SubTitle>
      </TitleSet>
      <Content>
        <Box>
          <Image src={ghost}/>
          <Info>
            <BoxTitle>Ghost</BoxTitle>
            <Desc>Automatization of the Ghost app's deployment and monitoring</Desc>
            <Tools>
              <Tech>Ansible</Tech>
              <Tech>Kubernetes</Tech>
              <Tech>Google Cloud</Tech>
            </Tools>
            <Actions className='ghost'>
              <Code href="https://github.com/JoaoRamoss/trabalho-ASCN" target="_blank">Code <GhLogo src={ghlogo}/></Code>
            </Actions>
          </Info>
        </Box>

        <Box className="reverse">
          <Image src={eas}/>
          <Info>
            <BoxTitle>Etch-a-sketch</BoxTitle>
            <Desc>Etch-a-sketch is an interactive page where you can draw on a canvas. The user can change the canvas' resolution to fit their needs.</Desc>
            <Tools>
              <Tech>JavaScript</Tech>
              <Tech>HTML</Tech>
              <Tech>CSS</Tech>
            </Tools>
            <Actions>
              <Code href="https://github.com/JoaoRamoss/trabalho-ASCN" target="_blank">Code <GhLogo src={ghlogo}/></Code>
              <Live href="https://etch-a-sketch-ramux.netlify.app/" target="_blank"> Live Demo <LiveLogo/></Live>
            </Actions>
          </Info>
        </Box>

        <Box>
          <Image src={fms}/>
          <Info>
            <BoxTitle>Football matches simulator</BoxTitle>
            <Desc>Project developed during the Object-Oriented Programming class. The program reads information 
              about all the teams and players from a provided CSV file and simulates matches between them.</Desc>
            <Tools>
              <Tech>Java</Tech>
            </Tools>
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