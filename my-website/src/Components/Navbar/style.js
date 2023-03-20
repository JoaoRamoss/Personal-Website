import styled from 'styled-components'

//"#30D5C8"
//#131313

const color = {
    highlight: "#368DF3",
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F9F9F9",
    primaryText: "#2D2E32",
    secondaryText: "#767676"
};
//#111215
export const Wrapper = styled.section`
    position: sticky;
    top: 0;
    left: 0;
    box-shadow: 1vw 1vw 2vw -1vw rgba(0,0,0,.15);
    width: 100vw;
    z-index: 100;
`

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    background: ${props => color.backgroundPrimary};
    justify-content: space-between;
    align-items: center;
    padding: 0 20vw;
    @media (max-width: 835px) {
        justify-content: center;
    }
    opacity: 95%;
    z-index: 1;
`
export const Name = styled.h1`
    font-size: 2.1rem;
    color: #2D2E32;
    margin: 0 1vw;
    font-family: 'Poppins';
`
export const NavbarContent = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style-type: none;
    gap: 2vw;
`

export const Item = styled.li`
    font-size: 1.1rem;
    text-align: center;
    color: #2D2E32;
    padding-bottom: 0.3vw;
    cursor: pointer;
    background: linear-gradient(${props => color.highlight}, ${props => color.highlight}) bottom / 0 0.1vh no-repeat;
    transition: all 0.5s;
    &:hover{
        background-size: 100% .25vh;
        color: ${props => color.highlight};
    }
`