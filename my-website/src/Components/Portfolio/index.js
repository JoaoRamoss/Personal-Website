import React from 'react'
import { Wrapper, Title, SubTitle, Content, Box, Image, Info, BoxTitle, Desc, Quote,
   TitleSet, Tools, Code, GhLogo, Actions, Live, LiveLogo, BoxTitleWrapper, StackItems, Display, StackLogo } from './style.js'

import ghost from '../../images/ghost.png'
import ghlogo from '../../images/ghub.png'
import eas from '../../images/eas.png'
import login from '../../images/Login.png'
import braguia from '../../images/braguia.gif'
import react from '../../images/react.png'
import javascript from '../../images/js.png'
import rest from '../../images/rest-api-icon.png'
import python from '../../images/python.png'
import flask from '../../images/flask.png'
import kubernetes from '../../images/kubernetes.png'
import ansible from '../../images/Ansible_Logo.png'
import gc from '../../images/google-cloud.png'
import html from '../../images/html.png'
import css from '../../images/css.png'

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'



const Portfolio = () => {
  return (
    <Wrapper id = 'portfolio'>
      <TitleSet>
        <Title>Portfolio</Title>
        <SubTitle>"The only way to do great work is to love what you do" <Quote>- Steve Jobs</Quote></SubTitle>
      </TitleSet>
      <Content>

      <Box className="reverse">
          <Image className="braguia" src={braguia}/>
          <Info>
            <BoxTitleWrapper>
              <BoxTitle>BraGuia</BoxTitle>
              <Tools>
                <StackItems>
                  <Tooltip id="my-tooltip"/>
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="React Native" 
                                  data-tooltip-place="bottom" className="react" src={react} alt="react logo"/></Display>
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="JavaScript" 
                                  data-tooltip-place="bottom" className="js" src={javascript} alt="Javascript logo"/></Display>
              
              <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="REST API" 
                                  data-tooltip-place="bottom" className="rest" src={rest} alt="REST API logo"/></Display>
                </StackItems>
              </Tools>
            </BoxTitleWrapper>
            <Desc>BraGuia is a user-friendly travel app that guides you around the city of Braga, no tour guide needed. 
              It's packed with a variety of interesting trails, guiding users from point to point with clear, detailed descriptions about each unique spot.
               This was a class project, developed alongside two of my classmates. </Desc>
            
            <Actions>
              <Code href="https://github.com/JoaoRamoss/TDS-2" target="_blank">Code <GhLogo src={ghlogo}/></Code>
            </Actions>
          </Info>
        </Box>

      <Box>
          <Image src={login}/>
          <Info>
            <BoxTitleWrapper>
              <BoxTitle>RasBet</BoxTitle>
              <Tools>
              <StackItems>
                  <Tooltip id="my-tooltip"/>
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="React Native" 
                                  data-tooltip-place="bottom" className="react" src={react} alt="react logo"/></Display>
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="Python" 
                                  data-tooltip-place="bottom" className="python" src={python} alt="Python logo"/></Display>
              
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="Flask" 
                                  data-tooltip-place="bottom" className="flask" src={flask} alt="Flask logo"/></Display>
                </StackItems>
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
              <StackItems>
                  <Tooltip id="my-tooltip"/>
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="Ansible" 
                                  data-tooltip-place="bottom" className="ansible" src={ansible} alt="Ansible logo"/></Display>
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="Kubernetes" 
                                  data-tooltip-place="bottom" className="kubernetes" src={kubernetes} alt="Kubernetes logo"/></Display>
              
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="Google Cloud" 
                                  data-tooltip-place="bottom" className="gc" src={gc} alt="Google Cloud logo"/></Display>
                </StackItems>
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
              <StackItems>
                  <Tooltip id="my-tooltip"/>
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="JavaScript" 
                                  data-tooltip-place="bottom" className="js" src={javascript} alt="Javascript logo"/></Display>
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="HTML" 
                                  data-tooltip-place="bottom" className="html" src={html} alt="HTML logo"/></Display>
              
                  <Display><StackLogo data-tooltip-id="my-tooltip" 
                                  data-tooltip-content="CSS" 
                                  data-tooltip-place="bottom" className="css" src={css} alt="CSS logo"/></Display>
                </StackItems>
              </Tools>
            </BoxTitleWrapper>
            <Desc>Etch-a-sketch is an interactive page where you can draw on a canvas. The user can change the canvas' resolution to fit their needs.</Desc>
            <Actions>
              <Code href="https://github.com/JoaoRamoss/Etch-a-sketch" target="_blank">Code <GhLogo src={ghlogo}/></Code>
              <Live href="https://etch-a-sketch-ramux.netlify.app/" target="_blank"> Live Demo <LiveLogo/></Live>
            </Actions>
          </Info>
        </Box>

      </Content>
    </Wrapper>
  )
}

export default Portfolio