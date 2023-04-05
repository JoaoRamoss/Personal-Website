import React from 'react'
import { Wrapper, Title, SubTitle, Content, Box, Image, Info, BoxTitle, Desc, Quote,
   TitleSet, Tech, Tools, Code, GhLogo, Actions } from './style.js'

import ghost from '../../images/ghost.png'
import ghlogo from '../../images/ghub.png'

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
      </Content>
    </Wrapper>
  )
}

export default Portfolio