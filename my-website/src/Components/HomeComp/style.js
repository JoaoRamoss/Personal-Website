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
    justify-content: space-between
`

export const ProfilePic = styled.img`
    width: 25rem;
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${prop => color.highlight};
`

export const WelcomeMessage = styled.h1`
    color: #eee;
    font-size: 10rem;
    font-family: 'Acme';
    margin: 0;
`

export const UnderText = styled.div`
    color: #eee;
    font-size: 1.5rem;
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
    width: 4rem;
`

export const Links = styled.div`
    display: flex;
    gap: 3rem;
    margin: 8vh 0;
    align-items: center;
    justify-content: center;
`

export const GhLogo = styled.img`
    width: 4rem;
`