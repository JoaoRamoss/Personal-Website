import styled from "styled-components";
import { Link } from 'react-router-dom'

const color = {
    highlight: "#368DF3"
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 5vh;
    z-index: 0;
    margin: 10vh 15vw;
`

export const Home = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProfilePic = styled.img`
    width: 23vw;
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${prop => color.highlight};
`

export const WelcomeMessage = styled.h1`
    color: #eee;
    font-size: 8vw;
    font-family: 'Acme';
    margin-right: 30px;
    display: inline;
`

export const UnderText = styled.div`
    color: #eee;
    font-size: 1.25vw;
    margin: 0;
    font-weight: 500;
    color: ${props => color.highlight};
`

export const About = styled.div`
    margin-top: 30vh;
    font-size: 2.5rem;
    margin-right: auto;
    font-family: 'Acme';
`

export const Redirect = styled.a`
    cursor: pointer;
    color: white;
    text-decoration: none;
`

export const LiLogo = styled.img`
    width: 2vw;
`

export const Links = styled.div`
    display: flex;
    gap: 1.5vw;
    margin: 1.5vw 0;
    align-items: center;
    justify-content: flex-start;
`

export const GhLogo = styled.img`
    width: 2vw;
`

export const Stack = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5vw;
    margin-bottom: 7vw;
`

export const StackItems = styled.div`
    display: flex;
    gap: 1.5vw;
    align-items: center;
    justify-content: center;
`

export const StackText = styled.p`
    color: #eee;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.8vw;
    
`

export const Separator = styled.div`
    margin: 0 3vw;
    height: 2vw;
    border: 1.5px solid;
    border-top: 0;
    border-bottom: 0;
    border-left: 0;
    border-image: linear-gradient(0deg, rgba(17,18,21,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 100%);
    border-image-slice: 1;
`

export const StackLogo = styled.img`
    &.react{
        height: 2.3vw;
        width: auto;
    }
    &.js{
        height: 2vw;
        width: auto;
    }

    &.java{
        height: 2.8vw;
        width: auto;
    }
    &.python{
        height: 2.2vw;
        width: auto;
    }
    &.mysql{
        height: 2.2vw;
        width: auto;
    }
    &.c{
        height: 2.7vw;
        width: auto;
    }
`