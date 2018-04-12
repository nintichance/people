import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styled-components/Containers'
const Home = () => {
    return(
        <Container>
            <Link to="/people">View People</Link>
            <Link to="/characters">Count Characters</Link>
        </Container>
    )
}

export default Home