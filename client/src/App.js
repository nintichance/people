import React, { Component } from 'react'
import PeopleTable from './components/PeopleTable'
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
        <PeopleTable />
      </div>
    )
  }
}

export default App
