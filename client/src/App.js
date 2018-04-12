import React, { Component } from 'react'
import PeopleTable from './components/PeopleTable'
import CharacterCountList from './components/CharacterCountList'
import axios from 'axios'

class App extends Component {
  state = {
    people: []
  }
  componentWillMount(){
    this.getPeople()
  }

  getPeople = async() => {
    try{
      const response = await axios.get('/api/people')
      const people = response.data
      this.setState({people: people})
    }
    catch(error){
      console.log(error)
    }
  }

  render() {
    console.log(this.state.people)
    return (
      <div>
        <PeopleTable people={this.state.people}/>
        <CharacterCountList people={this.state.people}/>
      </div>
    )
  }
}

export default App
