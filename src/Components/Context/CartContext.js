import React from "react"
import toast, { Toaster } from "react-hot-toast"
import { createContext, useState } from "react"

//Contexto usado para productCounter
export const CartContext = createContext({
    carrito : [],
    precio_total : 0,
    cantidad_total : 0 
});

const { Provider } = CartContext

//Proveedor y contexto del carrito
const CartProvider = ({ children }) => {

    //Uso del useState para setear los valores del carrito
    const [carrito, setCarrito] = useState([])
    //Función para cuando el usuario el ingresa el mismo producto más de 2 veces
    const agregarProducto = (producto, cantidad) => { 
        if (isInCart(producto.id)) {
            toast.success(`Agregaste el mismo producto al carrito, cantidad: ${cantidad}.`);
            const actualizar = carrito.findIndex(elemento => elemento.item.id === producto.id)
            carrito[actualizar].cantidad = carrito[actualizar].cantidad + cantidad
            setCarrito([...carrito])
        } else {
            toast.success(`Agregaste ${producto.title}, cantidad: ${cantidad}.`);
            const newObj = {
              item: producto,
              cantidad
            }
            setCarrito([...carrito, newObj])
        }
    } 
    
    //Función que sirve para cuando un usuario quiera eliminar algún producto del carrito
    const eliminarProducto = (id) => { 
        const updateCart = carrito.filter(elemento => elemento.item.id !== id)
        setCarrito(updateCart)
    }
    
    //Función que sirve para cuando un usuario quiera eliminar todos los productos del carrito
    const limpiarCarrito = () => {
        setCarrito([])
    }

    //Función que sirve para que no se duplique el mismo producto en el carrito
    const isInCart = (id) => {
        return carrito.some(elemento => elemento.item.id === id)
    }
    
    //Función que sirve de contador de la cantidad de productos que se agregan al carrito
    const productCounter = () => {
        return carrito.reduce((accum, item) => accum = accum + item.cantidad, 0)
    }

    //Función que sirve para calcular el precio total de todos los productos
    const total = () => {
        return carrito.reduce((accum, producto) => accum = accum + (producto.item.price * producto.cantidad), 0)
    }

    //Los valores del proveedor
    const value = { 
        carrito,  
        agregarProducto,
        eliminarProducto, 
        limpiarCarrito,
        productCounter,
        total
    }

    //Proveedor de Cart para envolver en la App y asi las funciones son utilizadas correctamente
    return (
        <Provider value={value}>
            {children}
            <Toaster />
        </Provider>
    )
}


export default CartProvider