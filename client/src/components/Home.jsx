import React from 'react'
import { Link } from 'react-router-dom'
import { Container, SplashImageDiv } from './styled-components/Containers'

import NavBar from './NavBar'
const Home = () => {
    return(
        <div>
            <NavBar />
            <SplashImageDiv />
            <Container>
                <h1> Welcome to the People Site!</h1>
                <Link to="/people">View People</Link>
                <Link to="/characters">Count Characters</Link>
            </Container>
        </div>
    )
}

export default Home