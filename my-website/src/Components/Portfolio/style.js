import styled from 'styled-components'
import { ImShare } from 'react-icons/im'

const color = {
    highlight: "#368DF3",
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F9F9F9",
    primaryText: "#2D2E32",
    secondaryText: "#767676"
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${color.backgroundSecondary};
    padding: 5rem 3rem;
`

export const TitleSet = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10vw;
`

export const Title = styled.p`
    color: ${prop => color.highlight};
    align-self: flex-start;
    font-weight: 600;
    font-size: 2.1rem;
    margin-bottom: 1rem;
`

export const SubTitle = styled.p`
    color: ${prop => color.primaryText};
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 3rem;
    margin-top: 0;
    @media (max-width: 500px) {
        font-size: .9rem;
    }
`

export const Quote = styled.span`
    color: ${color.secondaryText};
    font-size: .8rem;
    font-weight: 400;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 4vw;
    gap: 2rem;

`
export const Box = styled.div`
    display: flex;
    border-radius: .8rem;
    background-color: ${color.backgroundPrimary};
    box-shadow: 0 0 1.5rem -.7rem ${prop => color.primaryText};
    padding: 2rem 3rem;
    gap: 5rem;
    width: 60rem;
    &.reverse {
        flex-direction: row-reverse;
    }
    @media(max-width: 1200px){
        width: 80vw;
    }
    @media (max-width: 1005px) {
        flex-direction: column;
        gap: 2rem;
        width: 60vw;
        &.reverse {
        flex-direction: column-reverse;
    }
    }
`

export const Image = styled.img`
    height: 20rem;
    width: auto;
    border-radius: 1rem;
    box-shadow: 0 0 1.1rem -.7rem ${prop => color.primaryText};
    @media(max-width: 1200px){
        height: 25vw;
        width: auto;
        &.braguia{
          height: 25vw; 
          width: auto;
        }
    }
    @media (max-width: 1005px) {
        width: 35rem;
        height: auto;
        align-self: center;
        
    }
    @media (max-width: 935px) {
        width: 60vw;
        height: auto;
    }
    &.braguia {
        height: 25rem;
    }
`

export const Info = styled.div``

export const BoxTitle = styled.p`
    color: ${color.primaryText};
    font-weight: 700;
    font-size: 1.3rem;
    @media (max-width: 515px) {
        font-size: 1rem;
    }
`

export const Desc = styled.p`
    color: ${color.secondaryText};
    font-weight: 500;
    font-size: 1rem;  
    @media (max-width: 515px) {
        font-size: .8rem;
    }  
`

export const Tech = styled.div`
    background-color: ${color.backgroundPrimary};
    box-shadow: 0 0 1.5rem -.7rem ${prop => color.primaryText};
    padding: .4rem .7rem;
    font-size: .8rem;
    border-radius: .3rem;
    font-weight: 500;
    @media (max-width: 515px) {
        font-size: .6rem;
    }
`

export const Tools = styled.div`
    display: flex;
    gap: .7rem;
    align-items: center;
    justify-content: center;
`
export const Actions = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;
`

export const Code = styled.a`
    display: flex;
    align-items: center;
    gap: .3rem;
    text-decoration: none;
    color: ${color.primaryText};
    font-weight: 600;
    font-size: 1rem;
    padding-left: 0;
    margin-right: 0;
    @media (max-width: 515px) {
        font-size: .8rem;
    }
`

export const GhLogo = styled.img`
    width: 1.5rem;
    filter: invert(100%);
    @media (max-width: 515px) {
        width: 1.2rem;
    }
`

export const Live = styled.a`
    display: flex;
    align-items: center;
    gap: .3rem;
    text-decoration: none;
    color: ${color.primaryText};
    font-weight: 600;
    font-size: 1rem;
    padding-left: 0;
    margin-right: 0;
    @media (max-width: 515px) {
        font-size: .8rem;
    }
`

export const LiveLogo = styled(ImShare)`
    scale: 1;
`

export const BoxTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StackItems = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const Display = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 1rem -.7rem ${prop => color.primaryText};
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 10%;
`

export const StackLogo = styled.img`

    
    &.react{
        height: 2.3rem;
        width: auto;
    }
    &.js{
        height: 1.9rem;
        width: auto;
    }

    &.java{
        height: 2.8rem;
        width: auto;
    }
    &.python{
        height: 2.2rem;
        width: auto;
    }
    &.mysql{
        height: 1.7rem;
        width: auto;
    }
    &.c{
        height: 2.6rem;
        width: auto;
    }
    &.rest{
        height: 1.9rem;
        width: auto;
    }
    &.flask {
        height: 2.1rem;
        width: auto;
    }

    &.gc {
        height: 2.1rem;
        width: auto;
    }
    &.kubernetes{
        height: 2.4rem;
        width: auto;
    }
    &.ansible {
        height: 2.7rem;
        width: auto;
    }
    &.css {
        height: 2.1rem;
        width: auto;
    }
    &.html {
        height: 2.1rem;
        width: auto;
    }
`