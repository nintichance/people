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



export default { InfoText, HomeHeader }