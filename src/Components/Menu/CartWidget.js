import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"


function CartWidget() {
    //Iconos para el menu de la app
    return (
        <div className="icons">
            <FontAwesomeIcon icon={faHeart} />
            <Link to={"/Cart"}>
                <button><FontAwesomeIcon icon={faShoppingCart} /></button>
            </Link>
            <FontAwesomeIcon icon={faUser} />
        </div>
    )
}

export default CartWidget