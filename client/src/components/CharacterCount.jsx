import React, { Component } from 'react'

class CharacterCount extends Component{

    countCharacters = (email) => {
        const emailArray = email.split("")
        let characters = []
        const emailArrayCopy = emailArray.map((character)=>{
            return character
        })
        let count = 0
      console.log(emailArrayCopy)
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