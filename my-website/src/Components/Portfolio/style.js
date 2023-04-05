import styled from 'styled-components'

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
`
export const Box = styled.div`
    display: flex;
    border-radius: .8rem;
    background-color: ${color.backgroundPrimary};
    box-shadow: 0 0 1.5rem -.7rem ${prop => color.primaryText};
    padding: 2rem 3rem;
    gap: 5rem;
`

export const Image = styled.img`
    height: 20rem;
    width: auto;
    border-radius: 1rem;
    box-shadow: 0 0 1.1rem -.7rem ${prop => color.primaryText};
`

export const Info = styled.div``

export const BoxTitle = styled.p`
    color: ${color.primaryText};
    font-weight: 700;
    font-size: 1.3rem;
`

export const Desc = styled.p`
    color: ${color.secondaryText};
    font-weight: 500;
    font-size: 1.1rem;    
`

export const Tech = styled.div`
    background-color: ${color.backgroundPrimary};
    box-shadow: 0 0 1.5rem -.7rem ${prop => color.primaryText};
    padding: .4rem .7rem;
    font-size: .8rem;
    border-radius: .3rem;
    font-weight: 500;
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
    &.ghost{
        margin-top: 3rem;
        justify-content: center;
    }
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
`

export const GhLogo = styled.img`
    width: 1.5rem;
    filter: invert(100%);
`