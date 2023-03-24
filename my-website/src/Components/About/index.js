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
            As a software engineering student, I am passionate about using technology to solve real-world problems and create innovative solutions. I am constantly seeking new challenges and opportunities to expand my skills and knowledge in the field.<br/> Outside of the classroom, I enjoy spending time with my friends and family, and exploring new programming tools and frameworks.<br/> I'm excited about the opportunities that lie ahead, and I look forward to making a meaningful contribution to the industry.
            </Content>
          </Text>
        </AboutSection>
      </Wrapper>
    </AboutPage>
  )
}

export default About