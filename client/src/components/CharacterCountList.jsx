import React, { Component } from 'react'
import CharacterCount from './CharacterCount'
import styled from 'styled-components'

class CharacterCountList extends Component {

    peopleList = this.props.people.map((person)=>{
        return(
        <div>
            <CharacterCount key={person.id}
                            firstName={person.first_name}
                            lastName={person.last_name}
                            email={person.email_address}/>
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