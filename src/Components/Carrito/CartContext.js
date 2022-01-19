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
        if (isInCart(producto.id)) {
            console.log(`Agregaste el mismo producto al carrito, cantidad: ${cantidad}.`);
            const actualizar = carrito.findIndex(elemento => elemento.item.id === producto.id)
            carrito[actualizar].cantidad = carrito[actualizar].cantidad + cantidad
            setCarrito([...carrito])
        } else {
            console.log(`Agregaste ${producto.title}, cantidad: ${cantidad}.`);
            const newObj = {
              item: producto,
              cantidad
            }
            setCarrito([...carrito, newObj])
        }
    } 
    
    const eliminarProducto = (id) => { 
        const updateCart = carrito.filter(elemento => elemento.item.id !== id)
        setCarrito(updateCart)
    }
    
    const limpiarCarrito = () => {
        setCarrito([])
     }

    const isInCart = (id) => {
        return carrito.some(elemento => elemento.item.id == id)
    }
    
    const productCounter = () => {
        return carrito.reduce((accum, item) => accum = accum + item.cantidad, 0)
    }
    
    const value = { 
        carrito, 
        precio_total, 
        cantidad_total , 
        agregarProducto ,
        eliminarProducto , 
        limpiarCarrito ,
        productCounter
    }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}


export default CartProvider