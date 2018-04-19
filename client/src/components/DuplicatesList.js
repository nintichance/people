import React, { Component } from 'react'

class DuplicatesList extends Component{
    componentWillMount(){
        this.findDuplicates()
    }
    findDuplicates = () => {
        const duplicates = []
        const emails = this.props.people.map((person)=>{
            return person.email_address
        })
        console.log(emails)
    }
    render(){
    return(
        <div>
            Hello from DuplicatesList
        </div>
    )
    }
}

export default DuplicatesList