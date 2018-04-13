import React, { Component } from 'react'
import DisplayCount from './DisplayCount'
import { CountContainer, CountInfo, PeopleInfo } from './styled-components/Containers'
import styled from 'styled-components'

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

    displayCount = () => {
        if (this.state.showCount){
            this.setState({showCount: false})
        }
        else{
            this.setState({showCount: true})
        }
    }

    render(){
        return(
            <CountContainer>
                <PeopleInfo>
                    <p>{this.props.firstName} {this.props.lastName}</p>
                </PeopleInfo>
                <CountInfo>
                    {this.state.showCount ? <DisplayCount characters = {this.state.characters} displayCount={this.displayCount}/>  : <button onClick={() => this.displayCount()}>{this.props.email}</button>}
                </CountInfo>
            </CountContainer>
        )
    }
}

export default CharacterCount