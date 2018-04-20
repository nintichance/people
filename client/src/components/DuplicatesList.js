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
        emails.forEach((email, index) => {
            if((duplicates.indexOf(email) === -1) && (emails.indexOf(email, index + 1) !== -1)){
              duplicates.push(email)
            }
          })
        console.log(this.props.people.length)
    }
    estimateDuplicates = (arr1, arr2) => {
        let count = 0
        //compare array one with array two
        //iterate through each array
        //compare the elements of the array, if they are the same, then add to the count
        arr1.forEach((element, index) => {
            console.log(element)
              if ((Object.keys(element)[0] === Object.keys(arr2[index])[0]) && (Object.values(element)[0] === Object.values(arr2[index])[0])){
                  count += 1
              }
          })
        //take the length of the longer array and the count. divide the count by it
        if (arr1.length === arr2.length){
            return count/arr1.length
        } 
        else if (arr1.length > arr2.length){
            return count/arr1.length
        }
        //if accuracy is more than 90%, then it's a duplicate
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