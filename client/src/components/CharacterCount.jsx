import React, { Component } from 'react'
import DisplayCount from './DisplayCount'
class CharacterCount extends Component{
    state = {
        characters: [],
        showCount: false
    }
    
    componentWillMount(){
        this.countCharacters()
    }

    countCharacters = () => {
        const emailArray = this.props.email.split("")
        let characters = []
        const emailArrayCopy = emailArray.map((character)=>{
            return character
        })
        let count = 0
        emailArray.forEach((character, index)=>{
            if (character === emailArrayCopy[index]){
                count++
                emailArrayCopy.splice(emailArrayCopy[index], 1)
            }
            if (count > 0){
            let characterCount = {}
            characterCount.character = emailArray[index]
            characterCount.count = count
            characters.push(characterCount)
            }
            this.setState({characters: characters})
        }) 
    }

    render(){
        return(
            <div>
                {this.state.showCount ? <DisplayCount characters = {this.state.characters}/> : null}
                <p>{this.props.firstName} {this.props.lastName}</p>
                <button onClick={() => this.setState({showCount: true})}>{this.props.email}</button>
            </div>
        )
    }
}

export default CharacterCount