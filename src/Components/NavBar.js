import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import "./CSS/App.css"

function Menu() {

    //Uso del useContext para traer el productCounter, que muestre cuantos productos hay en el carrito (si no hay ningún producto no mmuestra ningun valor).
    const { productCounter } = useContext(CartContext)
    //Menu con los Links con sus respectivas rutas o Routes que hay en App.js y los iconos que nos envian al Cart y al Login.
    return (
        <header>

            <Link to="/" className="logo">La libreria</Link>

            <nav className="navbar">
                <Link to="/">Inicio</Link>
                <Link to="/Ayuda">Ayuda</Link>
                <Link to="/Category">Generos</Link>
            </nav>

            <div className="icons">
                <button><FontAwesomeIcon icon={faHeart} /></button>
                <Link to={"/Cart"}>
                    <button><FontAwesomeIcon icon={faShoppingCart} />{productCounter() > 0 && <p>{productCounter()}</p>}</button>
                </Link>
                <Link to={"/Login"}>
                    <button><FontAwesomeIcon icon={faUser} /></button>
                </Link>
            </div>

        </header>
    )
}

export default Menu