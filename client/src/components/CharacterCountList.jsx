import React, { Component } from 'react'
import CharacterCount from './CharacterCount'
import NavBar from './NavBar'
import styled from 'styled-components'

class CharacterCountList extends Component {

    peopleList = this.props.people.map((person, index)=>{
        return(
        <div>
            <CharacterCount key={index}
                            firstName={person.first_name}
                            lastName={person.last_name}
                            email={person.email_address}/>
        </div>
        )
    })
    render(){
    return (
        <ParentContainer>
            <NavBar />
            <Header>Click Button to Count Unique Characters</Header>
            <Container>
                {this.peopleList}
            </Container>
        </ParentContainer>
    )
}
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
export const Header = styled.div`
    margin-top: 36px;
    background: #333333;
    color: white;
    width: 100vw;
    font-size: 2em;
    display: flex;
    justify-content: center;
`
export default CharacterCountList