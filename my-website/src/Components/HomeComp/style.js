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
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 5rem;
    z-index: 0;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-bottom: 8rem;

`

export const Home = styled.div`
    display: flex;
    align-items: center;
    gap: 10vw;
    margin-bottom: 1rem;
    @media (max-width: 855px){
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
`

export const ProfilePic = styled.img`
    width: 20rem;
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${prop => color.primaryText};
    @media (max-width: 1100px){
        width: 25vw;
    }
    @media (max-width: 855px){
        width: 18rem;
    }
`

export const WelcomeMessage = styled.h1`
    color: ${prop => color.primaryText};
    font-size: 5rem;
    display: inline;
    @media (max-width: 455px){
        font-size: 4rem;
    }
`

export const UnderText = styled.p`
    font-size: 1rem;
    margin: 0;
    font-weight: 500;
    color: ${prop => color.secondaryText};
    @media (max-width: 455px){
        font-size: .8rem;
    }
`

export const Redirect = styled.a`
    cursor: pointer;
    color: white;
    text-decoration: none;
`

export const LiLogo = styled.img`
    width: 2rem;
`

export const Links = styled.div`
    display: flex;
    gap: 1.5rem;
    margin: 1.5vw 0;
    align-items: center;
    justify-content: flex-start;
`

export const GhLogo = styled.img`
    width: 2rem;
    filter: invert(100%);
`

export const Stack = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    left: 0;
    margin-top: 4rem;
    margin-bottom: 7rem;
    @media(max-width: 855px){
        flex-direction: column;
    }
`

export const StackItems = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const StackText = styled.p`
    color: ${prop => color.primaryText};
    font-weight: 700;
    font-size: 1.7rem;
`

export const Separator = styled.div`
    margin: 0 3rem;
    height: 2.8rem;
    border: .15rem solid;
    border-top: 0;
    border-bottom: 0;
    border-left: 0;
    border-image: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(45,46,50,1) 50%, rgba(255,255,255,1) 100%);
    border-image-slice: 1;

    @media(max-width: 855px){
        border-right: 0;
        border-left: 0;
        border-top: 0;
        height: 0rem;
        width: 5rem;
        border: .08rem solid;
        margin-bottom: 2rem;
        border-image: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(45,46,50,1) 50%, rgba(255,255,255,1) 100%);
        border-image-slice: 1;
    }
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
`

export const DownloadButton = styled.button`

    background-color: transparent;
    border: .15rem solid ${prop => color.primaryText};
    border-radius: 25px;
    width: 7rem;
    height: 2.3rem;
    cursor: pointer;
    color: ${prop => color.primaryText};
    font-size: .8rem;
    font-weight: 500;
    font-family: 'Poppins';
    transition-property: background-color, color;
    transition-duration: 0.5s;
    &:hover{
        background-color: ${prop => color.primaryText};
        color: ${prop => color.backgroundPrimary};
    }

`

export const File = styled.a`
    text-decoration: none;
    font-size: 1rem;
    color: #eee;

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`
export const Wave = styled.img`
    height: 5rem;
    width: auto;
    margin-left: 1.5rem;
`


export const Display = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 1rem -.7rem ${prop => color.primaryText};
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 50%;
`