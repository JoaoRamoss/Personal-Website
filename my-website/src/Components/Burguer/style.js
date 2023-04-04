import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

const color = {
    highlight: "#368DF3",
    backgroundPrimary: "#FFFFFF",
    backgroundSecondary: "#F9F9F9",
    primaryText: "#2D2E32",
    secondaryText: "#767676"
};

export const BurguerButton = styled(FaBars)`
    scale:1.5;
    margin-top: .5rem;
    z-index: 20;
    position: relative  ;
    cursor: pointer;
    color: ${prop => color.primaryText};
    transition: color 0.2s;
    &:hover{
        color: ${prop => color.highlight};
    }
    @keyframes slideInFromLeft {
        0% {
            transform: rotate(-90deg);
        }
        100% {
            transform: rotate(0);
        }
    }
    animation: .3s ease-in-out 0s 1 slideInFromLeft;
`

export const CloseButton = styled(CgClose)`
    scale: 1.7;
    z-index: 20;
    position: relative;
    color: ${prop => color.primaryText};
    margin-top: .5rem;
    cursor: pointer;
    transition: color 0.2s;
    &:hover{
        color: ${prop => color.highlight}
    }
    @keyframes slideInFromLeft {
        0% {
            transform: rotate(-90deg);
        }
        100% {
            transform: rotate(0);
        }
    }
    animation: .3s ease-in-out 0s 1 slideInFromLeft;
`

export const NavbarContent = styled.ul`
    &.hidden{
        transform: translateX(100%);
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    list-style-type: none;
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
    transform: translateX(0%);
    transition: transform .3s ease-in-out;
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