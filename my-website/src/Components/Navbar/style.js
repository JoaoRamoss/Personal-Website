import styled from 'styled-components'

const color = {
    highlight: "#30D5C8",
    background: "#333333"
};


export const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    font-family: 'Roboto', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 4px 2px -2px rgba(0,0,0,.25);
    width: 100vw;
`

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    background: ${props => color.background};
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    //opacity: 80%;
`
export const Name = styled.h1`
    font-size: 2rem;
    color: #eee;
    margin-right: 5vw;
    margin-bottom: 1rem;
    margin-top: 1rem;
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
    transition: 0.5s;
    &:hover{
        background-size: 100% .15em;
        color: ${props => color.highlight};
    }
`

