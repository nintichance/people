import React from 'react'
import { Link } from 'react-router-dom'
import { Container, SplashImageDiv, RightDiv, LeftDiv, Button } from './styled-components/Containers'
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
                    <Button><Link to="/people">View People</Link></Button>

                </RightDiv>
                <LeftDiv>
                    <InfoText>Count the characters in their emails!</InfoText>
                    <Button><Link to="/characters">Count Characters</Link></Button>
                </LeftDiv>
            </Container>

        </div>
    )
}

export default Home