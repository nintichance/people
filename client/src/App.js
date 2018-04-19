import React, { Component } from 'react'
import PeopleTable from './components/PeopleTable'
import CharacterCountList from './components/CharacterCountList'
import Home from './components/Home'
import DuplicatesList from './components/DuplicatesList'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
    const PeopleTableComponent = () => (<PeopleTable people={this.state.people}/>)
    const CharacterCountComponent = () => (<CharacterCountList people={this.state.people}/>)
    return (
      <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/people" component={PeopleTableComponent}/>
              <Route exact path="/characters" component={CharacterCountComponent}/>
              <Route exaact path="/duplicates" component={DuplicatesList} />
            </Switch>
          </div>
      </Router>
    )
  }
}

export default App
