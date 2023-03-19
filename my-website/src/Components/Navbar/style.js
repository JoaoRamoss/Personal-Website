import styled from 'styled-components'

//"#30D5C8"
//#131313

const color = {
    highlight: "#368DF3",
    background: "#111215"
};


export const Wrapper = styled.section`

    position: sticky;
    top: 0;
    left: 0;
    height: 7.2vh;
    box-shadow: 1.5vh 1.5vh 2vh -1vh rgba(0,0,0,.25);
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
    @media (max-width: 835px) {
        justify-content: center;
    }
    opacity: 97%;
    z-index: 1;
`
export const Name = styled.h1`
    font-size: 4vh;
    color: #eee;
    margin: 1vh 1vw;
    font-family: 'Acme';
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
    font-size: 1.9vh;
    text-align: center;
    color: #eee;
    padding-bottom: 0.7vh;
    cursor: pointer;
    background: linear-gradient(${props => color.highlight}, ${props => color.highlight}) bottom / 0 0.1vh no-repeat;
    transition: all 0.5s;
    &:hover{
        background-size: 100% .25vh;
        color: ${props => color.highlight};
    }
    .active { 
        color: ${props => color.highlight};
        background: linear-gradient(${props => color.highlight}, ${props => color.highlight}) bottom / 100% 0.25vh no-repeat;
        padding-bottom: 0.7vh;
    }
`

