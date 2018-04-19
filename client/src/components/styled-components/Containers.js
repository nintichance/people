import styled from 'styled-components'

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 1199px){
        position: static;
    }
    @media only screen and (max-width: 500px){
        height: 150vh;
    }
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
   
`
export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin-right: 20px;
`

export const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    width: 80vh;
    height: 60vh;
    z-index: 4;
    background: rgba(35, 202, 98, 0.9);
    top: 35vh;
    right: 20vw;
    color: white;
    @media only screen and (max-width: 1199px){
        position: static;
        top: none;
        right: none;
        width: 100vw;
    }
`
  
export const LeftDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    width: 80vh;
    height: 60vh;
    z-index: 3;
    background: rgba(66, 174, 222, 0.9);
    top: 20vh;
    left: 10vw;
    color: white;
    @media only screen and (max-width: 1199px){
        position: static;
        top: none;
        left: none;
        width: 100vw;
    }
    @media only screen and (max-width: 500px){
        height: 50vh;
    }
`
export const Button = styled.div`
    width: 150px;
    height: 50px;
    border: 3px solid white;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        color: white;
    }

`
export const CountContainer = styled.div`
    display: flex;
    width: 90vw;
    justify-content: space-around;
`

export const CountInfo = styled.div`
    display: flex;
    justify-content: center;
    width: 45vw;
    margin: 10px;
`
export const PeopleInfo = styled.div`
    display: flex;
    width: 45vw;
    justify-content: center;
`

export const Header = styled.div`
    margin-top: 36px;
    background: #333333;
    color: white;
    width: 100vw;
    font-size: 2em;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 500px){
        font-size: 1.5em;
        padding: 5px;
    }
    @media only screen and (max-width: 400px){
        font-size: 1.25em;
        padding: 6px;
    }
    @media only screen and (max-width: 325px){
        font-size: 1em;
        padding: 8px;
    }
`
export const PeopleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    height: 80vh;
    overflow: scroll;
`
export const ParentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: scroll;
`
export const CountTable = styled.div`
  display: flex;
`

export default { CountTable, 
                 PeopleContainer, 
                 ParentContainer, 
                 Header, 
                 PeopleInfo, 
                 CountContainer, 
                 Button, 
                 IconsContainer, 
                 Container, 
                 NavDiv, 
                 RightDiv, 
                 LeftDiv }