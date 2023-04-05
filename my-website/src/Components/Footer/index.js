import React from 'react'
import ghlogo from '../../images/ghub.png'

import { Wrapper, MadeBy, View, GLink, GhLogo, Tech, Dev, TechWrap } from './style.js'

const Footer = () => {
  return (
    <Wrapper>
        <MadeBy>Made by <GLink href="https://github.com/joaoramoss" target="_blank">João Silva</GLink></MadeBy>
        <Dev>Developed with <TechWrap><Tech>React</Tech> <Tech>CSS</Tech></TechWrap></Dev>
        <View href="https://github.com/JoaoRamoss/Personal-Website" target="_blank">View the source code <GhLogo src={ghlogo}/></View>
    </Wrapper>
  )
}

export default Footer