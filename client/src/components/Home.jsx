import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <Link to="/people">View People</Link>
            <Link to="/characters">Count Characters</Link>
        </div>
    )
}

export default Home