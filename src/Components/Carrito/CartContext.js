import React from "react"
import { createContext, useState } from "react"


export const CartContext = createContext({
    carrito : [],
    precio_total : 0,
    cantidad_total : 0
});

const CartProvider = ({ children }) => {
    const [cartArray, setCartArray] = useState([])
    const value = [
        cartArray,
    ]

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider