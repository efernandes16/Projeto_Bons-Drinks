import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li>Drinks</li>
                    <li>Sobre Nós</li>
                    <li className="logo">Bons Drinks</li>
                    <li>Nosso Time</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header