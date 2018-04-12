import React from 'react'
import { Link } from 'react-router-dom'
import { NavDiv } from './styled-components/Containers'

const NavBar = (props) => {

    return (
        <NavDiv>
            <Link to="/"><img src="https://salesloft.com/wp-content/themes/hive/img/logo.svg" height="50px"/></Link>
            <div>
                <Link to="/people"><img src="https://image.flaticon.com/icons/svg/179/179672.svg" width="40px"/></Link>
                <Link to="/characters"><img src="https://image.flaticon.com/icons/svg/73/73220.svg" width="40px"/></Link>
            </div>
        </NavDiv>
    )

}


export default NavBar