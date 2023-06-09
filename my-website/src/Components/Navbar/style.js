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
    box-shadow: 1rem 1rem 2rem -1rem rgba(0,0,0,.15);
    width: 100%;
    z-index: 100;
`

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    background: ${props => color.backgroundPrimary};
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
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
    @media (max-width: 855px){
        flex-direction: column;
        background-color: ${prop => color.backgroundPrimary};
        flex-wrap: nowrap;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 0;
        margin-top: 0;
        gap: 3rem;
    }
`

export const Item = styled.li`
    font-size: 1.1rem;
    text-align: center;
    color: #2D2E32;
    padding-bottom: 0.2rem;
    cursor: pointer;
    background: linear-gradient(${props => color.highlight}, ${props => color.highlight}) bottom / 0 0.1rem no-repeat;
    transition: all 0.5s;
    &:hover{
        background-size: 100% .13rem;
        color: ${props => color.highlight};
    }
`