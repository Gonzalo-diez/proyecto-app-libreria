import React from "react";
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
                    <i class="fas fa-caret-down"></i>
                    <ul class="pags">
                        <li><a href="#">Policiaco</a></li>
                        <li><a href="#">Romance</a></li>
                        <li><a href="#">Ciencia Ficción</a></li>
                        <li><a href="#">Aventuras</a></li>
                    </ul>
                </div>
        </nav>

    </header>
    )
}

export default Menu