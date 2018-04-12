import React from 'react'
import { Link } from 'react-router-dom'
import { Container, SplashImageDiv, RightDiv, LeftDiv } from './styled-components/Containers'
import { HomeHeader, InfoText } from './styled-components/Text' 

import NavBar from './NavBar'
const Home = () => {
    return(
        <div>
            <NavBar />
            <SplashImageDiv />
            <Container>
                <HomeHeader>Website Features</HomeHeader>
                <RightDiv>
                    <InfoText>See people in our database!</InfoText>
                </RightDiv>
                <LeftDiv>
                    <InfoText>Count the characters in their emails!</InfoText>
                </LeftDiv>
                {/* <h1> Welcome to the People Site!</h1>
                <Link to="/people">View People</Link>
                <Link to="/characters">Count Characters</Link> */}
            </Container>

        </div>
    )
}

export default Home