import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <div className="icons">
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faUser} />
        </div>
    )
}

export default CartWidget