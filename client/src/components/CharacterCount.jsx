import React, { Component } from 'react'

class CharacterCount extends Component{

    countCharacters = (email) => {
        console.log(email.split(""))
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