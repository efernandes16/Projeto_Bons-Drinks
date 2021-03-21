import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="menu">
            <nav className="navMenu">
                    <Link to="/drinks">Drinks</Link>
                    <Link to="/sobre-nos">Sobre Nós</Link>
                    <Link to="/" className="logo">Bons Drinks</Link>
                    <Link to="nosso-time">Nosso Time</Link>
                    <Link to="/contato">Contato</Link>
            </nav>
        </header>
    )
}

export default Header