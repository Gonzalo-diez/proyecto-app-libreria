import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import "./main.css"

function Menu() {
    return (
        <header>

        <div id="menu-bar" class="fas fa-bars"></div>

        <a href="#" class="logo">La libreria</a>

        <nav class="navbar">
            <a href="./app.js">Inicio</a>
            <a href="#destacados">Destacados</a>
            <a href="#reviews">Ayuda</a>
            <a href="#libros">Generos</a>
                <div id="submenu" class="dropdown">
                    <FontAwesomeIcon icon={faCaretDown} />
                    <ul class="pags">
                        <li><a href="#">Policiaco</a></li>
                        <li><a href="#">Romance</a></li>
                        <li><a href="#">Ciencia Ficción</a></li>
                        <li><a href="#">Aventuras</a></li>
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