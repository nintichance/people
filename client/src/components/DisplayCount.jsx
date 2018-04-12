import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const DisplayCount = (props) => {
    
    const list = props.characters.map((character)=>{
        return(
            <div>
                {character.character} {character.count}
            </div>
        )
    })

    return(
        <div>
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
        </div>
    )
}

export default DisplayCount