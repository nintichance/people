import React from 'react'

const CharacterCountList = (props) => {
    const peopleList = props.people.map((person)=>{
        return(
        <div key={person.id}>
            <h1>{person.first_name}{person.last_name}</h1>
            <p>{person.email_address}</p>
        </div>
        )
    })
    return (
        <div>
            {peopleList}
        </div>
    )
}

export default CharacterCountList