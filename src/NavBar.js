import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import "./main.css"

function Menu() {
    return (
        <header>

        <h1 className="logo">La libreria</h1>

        <nav className="navbar">
            <h2>Inicio</h2>
            <h2>Destacados</h2>
            <h2>Ayuda</h2>
            <h2>Generos</h2>
                <div id="submenu" className="dropdown">
                    <FontAwesomeIcon icon={faCaretDown} />
                    <ul className="pags">
                        <li><h3>Policiaco</h3></li>
                        <li><h3>Romance</h3></li>
                        <li><h3>Ciencia Ficción</h3></li>
                        <li><h3>Aventuras</h3></li>
                    </ul>
                </div>
        </nav>

        <div className="icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faUser} />
        </div>


    </header>
    )
}

export default Menu