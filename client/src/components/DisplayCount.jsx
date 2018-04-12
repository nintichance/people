import React from 'react'

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
            {list}
        </div>
    )
}

export default DisplayCount