import React, { Component } from 'react'
import styled from 'styled-components'

class CharacterCountList extends Component {
    
    countCharacters = (email) => {
        alert(email)
    }

    peopleList = this.props.people.map((person)=>{
        return(
        <div key={person.id}>
            <p>{person.first_name} {person.last_name}</p>
            <button onClick={() => this.countCharacters(person.email_address)}>{person.email_address}</button>
        </div>
        )
    })
    render(){
    return (
        <Container>
            <h1>Click Button to Count Unique Characters</h1>
            {this.peopleList}
        </Container>
    )
}
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default CharacterCountList