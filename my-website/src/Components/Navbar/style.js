import styled from 'styled-components'

//"#30D5C8"
const color = {
    highlight: "#368DF3",
    background: "#131313"
};


export const Wrapper = styled.section`

    position: sticky;
    top: 0;
    left: 0;
    height: 7.2vh;
    box-shadow: 0 4px 2px -1px rgba(0,0,0,.25);
    width: 100vw;
    z-index: 100;
`

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    background: ${props => color.background};
    justify-content: space-between;
    align-items: center;
    padding: 0 20vw;
    @media (max-width: 563px) {
        justify-content: center;
    }
    opacity: 97%;
    z-index: 1;
`
export const Name = styled.h1`
    font-size: 2rem;
    color: #eee;
    margin-right: 5vw;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-family: 'Acme';
`
export const NavbarContent = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style-type: none;
    gap: 1.5rem;
`

export const Item = styled.li`
    font-size: 1.1rem;
    text-align: center;
    color: #eee;
    padding-bottom: 0.4em;
    cursor: pointer;
    background: linear-gradient(${props => color.highlight}, ${props => color.highlight}) bottom / 0 0.1em no-repeat;
    transition: all 0.5s;
    &:hover{
        background-size: 100% .15em;
        color: ${props => color.highlight};
    }
    .active { 
        color: ${props => color.highlight};
        background: linear-gradient(${props => color.highlight}, ${props => color.highlight}) bottom / 100% 0.15em no-repeat;
        padding-bottom: 0.4em;
    }
`

