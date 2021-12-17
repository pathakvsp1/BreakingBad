import React from 'react'
import bg from '../assests/logo.png'


const Header = () => {
    return (
        <div>
            <div className="centered">
            <img src={bg} className="img" alt="Logo"/>
            </div>
        </div>
    )
}

export default Header
