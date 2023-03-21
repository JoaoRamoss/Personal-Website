import React from 'react'
import { Wrapper, FormBox, PersonalInfoContainer, NameBox, EmailBox, SubjectBox, ContactTitle,
         TextArea, Submit, Alternative, Container, EmailSug, EmailLogo, Display, EmailShowcase,
          AlternativeContainer, CopyWarning, Subtitle, Point } from './style.js'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useEffect } from 'react'
import pointDown from '../../images/pointDown.png'
 
const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [result, showResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7yws0ux', 'template_w0rkhth', e.target, 'c3MbpKaGWVPHUfauh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };

  return (
    <Wrapper id='contact'>
      <ContactTitle>Contact me</ContactTitle>
      <Subtitle>Dont be shy! Get in touch <Point src={pointDown}/></Subtitle>
      <Container>
        <FormBox onSubmit={sendEmail}>
          <PersonalInfoContainer>
            <NameBox required type="text" htmlFor="Name" placeholder='Your name' name="from_name"/>
            <EmailBox required type="email" htmlFor="Email" placeholder='Your Email' name="email"/>
          </PersonalInfoContainer>
          <SubjectBox required type="text" htmlFor="Subject" placeholder='Subject' name="subject"/>
          <TextArea required className='message' type="text" htmlFor="Message" placeholder='Message' name="message"/>
          <Submit type="submit">Send</Submit>
        </FormBox>
        <AlternativeContainer>
          <Alternative>Alternatively, you can reach me via Email:</Alternative>
          <EmailShowcase>
            <CopyToClipboard text="jprmsilva05@gmail.com" onCopy={()=>setCopied(true)}>
              <Display><EmailLogo/></Display> 
            </CopyToClipboard>
            <EmailSug>jprmsilva05@gmail.com</EmailSug>
          </EmailShowcase>
          {copied && <CopyWarning>Copied to clipboard</CopyWarning>}
        </AlternativeContainer>
      </Container>
    </Wrapper>
  )
}

export default Contact