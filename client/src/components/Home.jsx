import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styled-components/Containers'
import NavBar from './NavBar'
const Home = () => {
    return(
        <div>
            <NavBar />
            <Container>
                <Link to="/people">View People</Link>
                <Link to="/characters">Count Characters</Link>
            </Container>
        </div>
    )
}

export default Home