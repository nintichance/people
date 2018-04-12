import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
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
    z-index: 1;
    background-color: rgba(39, 134, 190, 0.9);
`
export const SplashImageDiv = styled.img `
    width: 100vw;
    height: 80vh;
    background: url("https://images.unsplash.com/photo-1522658429337-5917c5277aa2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed7e56a9e305e8fcce005a002b79e19e&auto=format&fit=crop&w=1050&q=80");
    background-size: cover;
    background-position: bottom; 
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    @media only screen and (max-width: 350px){
        height: 100vh;
    }
`
export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin-right: 20px;
`

export const RightDiv = styled.div`
    position: absolute;
    width: 80vh;
    height: 60vh;
    z-index: 3;
    background: rgba(35, 202, 98, 0.9);
    top: 35vh;
    right: 20vw;
    
`
  
export const LeftDiv = styled.div `
    position: absolute;
    width: 80vh;
    height: 60vh;
    z-index: 2;
    background: rgba(66, 174, 222, 0.9);
    top: 20vh;
    left: 10vw;
    `



export default { IconsContainer, Container, NavDiv, RightDiv, LeftDiv }