import styled from 'styled-components'

export const HomeHeader = styled.h1 `
    font-size: 3em;
    margin-top: 100px;
    padding-bottom: 50px;
    align-self: flex-end;
    margin-right: 20px;
    color: #f7d359;
    @media only screen and (max-width: 1199px){
        align-self: flex-start;
    }
    @media only screen and (max-width: 800px){
        align-self: center;
    }
`

export const InfoText = styled.div`
    font-size: 2em;
    margin: 20px;
    color: white;
    width: 50%;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 50px;
  font-size: 1em;
  background: rgba(0, 0, 0, 0.0001)
  border-style: none;
`

export default { Button, 
                 InfoText, 
                 HomeHeader }