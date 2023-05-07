import styled from 'styled-components'

const color = {
    highlight: "#368DF3",
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F9F9F9",
    primaryText: "#2D2E32",
    secondaryText: "#767676"
};

export const AboutPage = styled.div`
    background-color: ${prop => color.backgroundPrimary};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 0;
`

export const AboutSection = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 10rem 5rem;
    gap: 5rem;
    align-items: center;
    padding: 0;
    @media (max-width: 1192px){
        flex-direction: column;
        gap: 1rem;
    }
`

export const Text = styled.p`
    max-width: 35rem;
`

export const SectionTitle = styled.p`
    color: ${prop => color.highlight};
    font-weight: 600;
    font-size: 2.1rem;
`

export const SubTitle = styled.p`
    color: ${prop => color.primaryText};
    font-weight: 500;
    font-size: 1.1rem;
    @media  (max-width: 1192px){
        text-align: center;
    }
`

export const Content = styled.p`
    font-size: 1rem;
    color: ${prop => color.secondaryText};
`

export const AboutImage = styled.img`
    height: 21.5rem;
    border-radius: 2rem;
    width: auto;
    @media (max-width: 1192px){
        height: 20rem;
    }
    @media (max-width: 550px){
        height: 50vw;
    }
`