import React from "react"
import { createContext, useState } from "react"

export const CartContext = createContext({
    carrito : [],
    precio_total : 0,
    cantidad_total : 0
});

const { Provider } = CartContext

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)

    
    const agregarProducto = (producto,cantidad) => { 
        console.log(`Agregando: ${cantidad} de productos ${producto.title}`)
        const newObj = {
            item: producto,
            cantidad
        }
        setCarrito([...carrito, newObj])
    } 
    
    const eliminarProducto = (id) => { 
        const updateCart = carrito.filter(element => element.id !== id)
        setCarrito(updateCart)
    }
    
    const limpiarCarrito = () => {
        setCarrito([])
     }

    const isInCart = (id) => {
        return carrito.some(element => element.id == id)
    }
    
    const productCounter = () => {
        return carrito.reduce((accum, item) =>
        accum = accum + item.cantidad, 0)
    }
    
    const value = { 
        carrito, 
        precio_total, 
        cantidad_total , 
        agregarProducto ,
        eliminarProducto , 
        limpiarCarrito
    }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}


export default CartProvider