import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import "../CSS/App.css"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"


function Menu() {
    //Menu con los Links con sus respectivas rutas o Routes que hay en App.js y los iconos de CartWidget.js
    return (
        <header>

        <Link to="/" className="logo">La libreria</Link>

        <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/Destacados">Destacados</Link>
            <Link to="/Ayuda">Ayuda</Link>
            <Link to="/Category">Generos</Link>
                <div id="submenu" className="dropdown">
                    <FontAwesomeIcon icon={faCaretDown} />
                    <ul className="pags">
                        <li><Link to="/Category/id">Policiaco</Link></li>
                        <li><Link to="/Category/id">Romance</Link></li>
                        <li><Link to="/Category/id">Ciencia Ficción</Link></li>
                        <li><Link to="/Category/id">Fantasia</Link></li>
                    </ul>
                </div>
        </nav>

        <CartWidget />


    </header>
    )
}

export default Menu