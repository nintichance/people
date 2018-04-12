import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
    height: 110vh;
    display: flex;
    flex-direction: column;
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
    z-index: 1;
    background-color: rgba(39, 134, 190, 0.9);
`
export const SplashImageDiv = styled.img `
    width: 100vw;
    height: 80vh;
    background: url("https://images.unsplash.com/photo-1519261386176-e55a3fa9ff01?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fc0f4a7920c2f3e009aefef998e20d9&auto=format&fit=crop&w=1050&q=80");
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



export default { IconsContainer, Container, NavDiv }