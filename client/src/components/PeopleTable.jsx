import React from 'react'
import ReactTable from 'react-table'
import NavBar from './NavBar'
import 'react-table/react-table.css'
import styled from 'styled-components'

const PeopleTable = (props) => {
    return(
        <div>
          <NavBar />
            <Container>
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
        </Container>
        </div>
    )
}

export const Container = styled.div`
    width: 100vw;
    margin-top: 100px;
`
export default PeopleTable