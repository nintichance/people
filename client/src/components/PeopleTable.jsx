import React from 'react'
import ReactTable from 'react-table'
import NavBar from './NavBar'
import 'react-table/react-table.css'

const PeopleTable = (props) => {
    return(
        <div>
          <NavBar />
            <ReactTable
          data={props.people}
          columns={[
            {
              Header: 'Name',
              columns: [
                {
                  Header: 'First Name',
                  id: 'firstName',
                  accessor: person => person.first_name
                },
                {
                  Header: 'Last Name',
                  id: 'lastName',
                  accessor: person => person.last_name,
                  onClick: () => {alert('Hello')}
                }
              ]
            },
            {
              Header: 'Info',
              columns: [
                {
                  Header: 'Email Address',
                  id: 'email',
                  accessor: person => person.email_address
                }
              ]
            }
          ]}
          defaultPageSize={25}
          className='-striped -highlight'
        />
        <br />
        </div>
    )
}
export default PeopleTable