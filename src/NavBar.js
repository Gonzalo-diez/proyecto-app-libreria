import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import "./main.css"
import CartWidget from "./CartWidget.js"

function Menu() {
    return (
        <header>


        <a href="#" className="logo">La libreria</a>

        <nav className="navbar">
            <a href="./app.js">Inicio</a>
            <a href="#destacados">Destacados</a>
            <a href="#reviews">Ayuda</a>
            <a href="#libros">Generos</a>
                <div id="submenu" className="dropdown">
                    <FontAwesomeIcon icon={faCaretDown} />
                    <ul className="pags">
                        <li><a href="#">Policiaco</a></li>
                        <li><a href="#">Romance</a></li>
                        <li><a href="#">Ciencia Ficción</a></li>
                        <li><a href="#">Aventuras</a></li>
                    </ul>
                </div>
        </nav>

        <CartWidget />


    </header>
    )
}

export default Menu