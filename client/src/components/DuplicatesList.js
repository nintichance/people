import React, { Component } from 'react'

class DuplicatesList extends Component{
    componentWillMount(){
        this.findDuplicates()
    }
    findDuplicates = () => {
        const duplicates = []
        // const emails = this.props.people.map((person)=>{
        //     return person.email_address
        // })
        const emails = ["nintidance@gmail.com", "myemail@emailaddress.com", "nintichance@gmail.com", "sinbadscat@email.com", "findingit@hufflepuff.com", "myemail@emailaddress.com", "nintidance@gmail.com", "ohworm@gmail.com", "ninntichanc@gmail.com", "nintidance@gmail.com" ]
        emails.forEach((email, index) => {
            if((duplicates.indexOf(email) === -1) && (emails.indexOf(email, index + 1) !== -1)){
              duplicates.push(email)
            }
          })
        console.log(duplicates)
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