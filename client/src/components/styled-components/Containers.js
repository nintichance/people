import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NavDiv = styled.div`
width: 100vw;
position: fixed;  
color: #f9f9f9;
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
background-color: #1b1b1b;
`


export default { Container, NavDiv }