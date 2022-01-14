import React from "react"
import { createContext } from "react"
import { Items } from "../Items/items.json"

function CartContext() {
    const contexto = createContext({
        carrito: [],
        precio_total: 0,
        cantidad_total: 0
    })
}

export default CartContext