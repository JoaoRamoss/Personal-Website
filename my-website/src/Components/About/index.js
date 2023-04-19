import React from 'react'
import { Wrapper, AboutSection, SectionTitle, Content, AboutPage, AboutImage, SubTitle, Text } from './style'
import aboutImage from '../../images/laptop.jpeg'

const About = () => {
  return (
    <AboutPage id="about">
      <Wrapper>
        <AboutSection>
          <AboutImage src={aboutImage}/>
          <Text>
            <SectionTitle>About me</SectionTitle>
            <SubTitle>Software Engineering Student at Universidade do Minho <br/>based in Fafe, Portugal 📍</SubTitle>
            <Content>
            I graduated in Software Engineering at Universidade do Minho, where I learned important concepts such as software development, 
            data structures and algorithms, amongst other fundamentals. I'm also currently a Master's degree student in the same field, 
            where I'm exploring the topics of Software Development, Validation and Maintenance, and Graphical Computing.<br/>
            I enjoy being challenged and often seek opportunities to expand my skills and step outside of my comfort zone.
            </Content>
          </Text>
        </AboutSection>
      </Wrapper>
    </AboutPage>
  )
}

export default About