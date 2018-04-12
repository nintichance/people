import React, { Component } from 'react'
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
        YAY!!! Hello React!!! I missed you! It's so good to be back, lovely!
      </div>
    )
  }
}

export default App
