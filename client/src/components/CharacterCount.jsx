import React, { Component } from 'react'

class CharacterCount extends Component{

    countCharacters = (email) => {
        const emailArray = email.split("")
        let  characterCount = {}
        emailArray.forEach((character) => { 
            characterCount[character] = (characterCount[character] || 0) + 1
        })
        console.log(characterCount)
    }

    render(){
        return(
            <div>
                <p>{this.props.firstName} {this.props.lastName}</p>
                <button onClick={() => this.countCharacters(this.props.email)}>{this.props.email}</button>
            </div>
        )
    }
}

export default CharacterCount