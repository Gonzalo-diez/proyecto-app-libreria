import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';




function CartWidget() {
    //Iconos para el menu de la app
    return (
        <div className="icons">
            <FontAwesomeIcon icon={faHeart} />
            <button><FontAwesomeIcon icon={faShoppingCart} /></button>
            <FontAwesomeIcon icon={faUser} />
        </div>
    )
}

export default CartWidget