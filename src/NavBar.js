import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import "./main.css"

function Menu() {
    return (
        <header>

        <div id="menu-bar" class="fas fa-bars"></div>

        <h1 class="logo">La libreria</h1>

        <nav class="navbar">
            <a href="./app.js">Inicio</a>
            <a href="#destacados">Destacados</a>
            <a href="#reviews">Ayuda</a>
            <a href="#libros">Generos</a>
                <div id="submenu" class="dropdown">
                    <FontAwesomeIcon icon={faCaretDown} />
                    <ul class="pags">
                        <li><h3>Policiaco</h3></li>
                        <li><h3>Romance</h3></li>
                        <li><h3>Ciencia Ficción</h3></li>
                        <li><h3>Aventuras</h3></li>
                    </ul>
                </div>
        </nav>

        <div class="icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faUser} />
        </div>


    </header>
    )
}

export default Menu