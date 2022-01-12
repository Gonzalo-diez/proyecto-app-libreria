import React from "react";
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
            <Link to="/Ayuda">Ayuda</Link>
            <Link to="/Category">Generos</Link>
        </nav>

        <CartWidget />


    </header>
    )
}

export default Menu