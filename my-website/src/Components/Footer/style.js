import styled from "styled-components";

const color = {
    highlight: "#368DF3",
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F9F9F9",
    primaryText: "#2D2E32",
    secondaryText: "#767676"
};

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${color.primaryText};
    padding: 1.5rem 0;
    gap: 1rem;
`

export const MadeBy = styled.p`
    color: ${color.backgroundSecondary};
    font-weight: 600;
    margin: 0;
`

export const View = styled.a`
    display: flex;
    text-decoration: none;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: ${color.backgroundSecondary};
    margin: 0;
`

export const GhLogo = styled.img`
    width: 1.5rem;
`

export const GLink = styled.a`
    text-decoration: none;
    color: ${color.backgroundPrimary};
    cursor: pointer;
    padding-bottom: .15rem;
    background: linear-gradient(${props => color.backgroundPrimary}, ${props => color.backgroundPrimary}) bottom / 0 0.1rem no-repeat;
    transition: all 0.5s;
    &:hover{
        background-size: 100% .15rem;
        color: ${props => color.backgroundPrimary};
    }
`

export const Tech = styled.div`
    background-color: ${color.primaryText};
    box-shadow: 0 0 1rem -.1rem black;
    padding: .3rem .5rem;
    font-size: .8rem;
    border-radius: .2rem;
    font-weight: 500;
`

export const TechWrap = styled.div`
    display: flex;
    gap: .5rem;
`

export const Dev = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    gap: .5rem;
    color: ${color.backgroundSecondary};
`