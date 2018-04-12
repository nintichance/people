import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import styled from 'styled-components'
const DisplayCount = (props) => {
    
    const list = props.characters.map((character)=>{
        return(
            <div>
                {character.character} {character.count}
            </div>
        )
    })

    return(
        <Container>
            <ReactTable
          data={props.characters}
          columns={[
            {
              Header: 'Count Characters',
              columns: [
                {
                  Header: 'Character',
                  id: 'character',
                  accessor: character => character.character
                },
                {
                  Header: 'Count',
                  id: 'count',
                  accessor: character => character.count,
                }
              ]
            }
          ]}
          defaultPageSize={5}
          className='-striped -highlight'
        />
        <br />
        <Button onClick={()=>{props.displayCount()}}>-</Button>
        </Container>
    )
}

export const Container = styled.div`
  display: flex;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 50px;
  font-size: 1em;
  background: rgba(0, 0, 0, 0.0001)
  border-style: none;
`

export default DisplayCount