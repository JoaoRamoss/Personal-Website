import styled, { keyframes } from 'styled-components'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import { fadeInUp } from 'react-animations'
import {  IoCheckmarkCircleOutline } from 'react-icons/io5'


const renderConfirmation = keyframes`${fadeInUp}`
const color = {
    highlight: "#368DF3",
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F9F9F9",
    primaryText: "#2D2E32",
    secondaryText: "#767676"
};

export const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 7rem 3rem;
`

export const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-start;
    border: .07rem solid ${prop => color.primaryText};
    height: 25rem;
    width: 35rem;
    padding: 3vw;
    background-color: ${prop => color.backgroundPrimary};
    border-radius: 2rem;
    box-shadow: 0 0 1.5rem -.7rem ${prop => color.primaryText};
    @media (max-width: 700px) {
        width: 60vw;
        padding: 4vw;
        height: 22rem;
    }
    @media (max-width: 450px) {
        padding: 7vw;
        gap: 1rem;
        padding-bottom: 1vw;
    }
`

export const PersonalInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1vw;
`
export const NameBox = styled.input`
    border: 0.08rem solid ${prop => color.primaryText};
    border-radius: .3rem;
    text-align: center;
    height: 2.3rem;
    width: 100%;
    font-size: 1.1rem;
    font-family: 'Poppins';
    color: ${prop => color.primaryText};
    background-color: ${prop=> color.backgroundSecondary};
    &:focus{
        outline: 2px solid ${prop => color.highlight}; 
    }
    @media (max-width: 700px) {
        font-size: .8rem;
    }
    @media (max-width: 450px) {
        height: 2rem;
    }
`

export const EmailBox = styled.input`
    border: 0.08rem solid ${prop => color.primaryText};
    border-radius: .3rem;
    text-align: center;
    height: 2.3rem;
    width: 100%;
    font-size: 1.1rem;
    font-family: 'Poppins';
    color: ${prop => color.primaryText};
    background-color: ${prop=> color.backgroundSecondary};
    &:focus{
        outline: 2px solid ${prop => color.highlight}; 
    }
    @media (max-width: 700px) {
        font-size: .8rem;
    }
    @media (max-width: 450px) {
        height: 2rem;
    }
`

export const SubjectBox = styled.input`
    border: 0.08rem solid ${prop => color.primaryText};
    margin-left: 0;
    margin-right: 0;
    border-radius: .3rem;
    height: 3rem;
    padding: 0;
    width: 100%;
    font-size: 1.1rem;
    text-align: center;
    align-self: center;
    font-family: 'Poppins';
    background-color: ${prop=> color.backgroundSecondary};
    &:focus{
        outline: 2px solid ${prop => color.highlight}; 
    }
    @media (max-width: 700px) {
        font-size: .8rem;
    }
    @media (max-width: 450px) {
        height: 2.3rem;
    }
`
export const ContactTitle = styled.div`
    color: ${prop => color.highlight};
    font-weight: 600;
    font-size: 2.1rem;
    @media (max-width: 660px) {
        font-size: 1.5rem;
        align-self: flex-start;
    }
`

export const TextArea = styled.textarea`
    height: 9rem;
    padding: 0.5rem 1rem;

    border: 0.08rem solid ${prop => color.primaryText};
    border-radius: .3rem;
    width: 93%;
    font-size: 1.1em;
    text-align: left;
    align-self: center;
    font-family: 'Poppins';
    resize: none;
    background-color: ${prop=> color.backgroundSecondary};
    &:focus{
        outline: 2px solid ${prop => color.highlight}; 
    }
    @media (max-width: 700px) {
        font-size: .8rem;
    }
    @media (max-width: 450px) {
        width: 87%;
    }
`

export const Submit = styled.button`
    background-color: ${prop=>color.highlight};
    align-self: center;
    width: 8rem;
    height: 3rem;
    border: .1rem solid ${prop => color.primaryText};
    border-radius: 3rem;
    cursor: pointer;
    font-family: 'Poppins';
    color: ${prop => color.backgroundPrimary};
    font-size: 1.2rem;
    font-weight: 500;
    @media (max-width: 700px) {
        font-size: 1rem;
        width: 6rem;
        height: 2rem;
    }
    @media (max-width: 450px) {
        margin-top: .5rem;
    }
    animation: .5s ${renderConfirmation};
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 3rem;
    }
`

export const Alternative = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;

    color: ${prop => color.primaryText};
    @media (max-width: 660px) {
        font-size: 1rem;
        text-align: center;
    }
`

export const EmailSug = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${prop => color.secondaryText};
    @media (max-width: 660px) {
        font-size: 1rem;
    }

`
export const EmailLogo = styled(FaEnvelopeOpenText)`
    color: ${prop => color.highlight};
    scale: 1.3;
    @media (max-width: 660px) {
        scale: 1.1;
    }
`

export const Display = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 1rem -.7rem ${prop => color.primaryText};
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
    @media (max-width: 660px) {
        width: 2.8rem;
        height: 2.8rem;
    }
`
export const EmailShowcase = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`
export const AlternativeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const CopyWarning = styled.p`
    font-size: .8rem;
    color: ${prop => color.secondaryText};
`

export const Subtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${prop => color.primaryText};
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 3rem;
    @media (max-width: 660px) {
        font-size: 1rem;
        align-self: flex-start;
    }
`

export const Point = styled.img`
    height: 2.1rem;
    @media (max-width: 660px) {
        height: 1.5rem;
    }
`

export const Confirm = styled(IoCheckmarkCircleOutline)`
    margin-top: 1.4rem;
    color: ${prop => color.highlight};
    scale: 4;
    animation: .5s ${renderConfirmation};
    align-self: center;
    @media (max-width: 700px) {
        margin-top: .3rem;
        scale: 3;
    }
    @media (max-width: 450px) {
        margin-top: 1.5rem;
    }
`