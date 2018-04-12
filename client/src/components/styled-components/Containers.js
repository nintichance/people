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
    background: url("https://images.unsplash.com/photo-1516757932457-9233f965b8d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c8569c54b9e9ee05072839b91bd643&auto=format&fit=crop&w=1052&q=80");
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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    width: 80vh;
    height: 60vh;
    z-index: 4;
    background: rgba(35, 202, 98, 0.9);
    top: 35vh;
    right: 20vw;
    color: white;
`
  
export const LeftDiv = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    width: 80vh;
    height: 60vh;
    z-index: 3;
    background: rgba(66, 174, 222, 0.9);
    top: 20vh;
    left: 10vw;
    color: white;
    
`



export default { IconsContainer, Container, NavDiv, RightDiv, LeftDiv }