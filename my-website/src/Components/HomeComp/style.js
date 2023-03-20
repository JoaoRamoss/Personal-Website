import styled from "styled-components";

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
    position: relative;
    margin-top: 5vh;
    z-index: 0;
    margin: 10vh 15vw;
`

export const Home = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3vw;
`

export const ProfilePic = styled.img`
    width: 20vw;
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${prop => color.primaryText};
`

export const WelcomeMessage = styled.h1`
    color: ${prop => color.primaryText};
    font-size: 6vw;
    margin-right: 30px;
    display: inline;
`

export const UnderText = styled.p`
    font-size: 1.15vw;
    margin: 0;
    font-weight: 500;
    color: ${prop => color.primaryText};
`

export const About = styled.div`
    margin-top: 30vh;
    font-size: 2.5rem;
    margin-right: auto;
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
    filter: invert(100%);
`

export const Stack = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 4vw;
    margin-bottom: 7vw;
`

export const StackItems = styled.div`
    display: flex;
    gap: 1.5vw;
    align-items: center;
    justify-content: center;
`

export const StackText = styled.p`
    color: ${prop => color.primaryText};
    font-weight: 700;
    font-size: 1.8vw;
    
`

export const Separator = styled.div`
    margin: 0 3vw;
    height: 2.8vw;
    border: 1.5px solid;
    border-top: 0;
    border-bottom: 0;
    border-left: 0;
    border-image: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(45,46,50,1) 50%, rgba(255,255,255,1) 100%);
    border-image-slice: 1;
`

export const StackLogo = styled.img`

    
    &.react{
        height: 2.3vw;
        width: auto;
    }
    &.js{
        height: 1.9vw;
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
        height: 1.7vw;
        width: auto;
    }
    &.c{
        height: 2.6vw;
        width: auto;
    }
`

export const DownloadButton = styled.button`

    background-color: transparent;
    border: .15vw solid ${prop => color.primaryText};
    border-radius: 25px;
    width: 7vw;
    height: 2.3vw;
    cursor: pointer;
    color: ${prop => color.primaryText};
    font-size: .8vw;
    font-weight: 500;
    transition-property: background-color, color;
    transition-duration: 0.5s;
    &:hover{
        background-color: ${prop => color.primaryText};
        color: ${prop => color.backgroundPrimary};
    }

`

export const File = styled.a`
    text-decoration: none;
    font-size: 1vw;
    color: #eee;

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vw;
`
export const Wave = styled.img`
    height: 6vw;
    width: auto;
    margin-left: 1.5vw;
`


export const Display = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 1vw -.7vw ${prop => color.primaryText};
    width: 3.3vw;
    height: 3.3vw;
    border-radius: 50%;
`