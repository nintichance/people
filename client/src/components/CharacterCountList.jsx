import React, { Component } from 'react'
import CharacterCount from './CharacterCount'
import NavBar from './NavBar'
import { Header, ParentContainer, PeopleContainer } from './styled-components/Containers'
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
            <Header>Click Button to Count Characters</Header>
            <PeopleContainer>
                {this.peopleList}
            </PeopleContainer>
        </ParentContainer>
    )
}
}

export default CharacterCountList