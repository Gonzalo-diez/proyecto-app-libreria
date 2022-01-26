import React from "react";
import { db } from "../Nucleo/Firebase"
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const CartItem = ({ producto, eliminarProducto, limpiarCarrito, total, carrito }) => {
    const [orden, setOrden] = useState(true)

    const productoComprado = () => {
        alert("Orden creada: " + Math.random() + " " + producto.cantidad + " " + producto.item.title + " Precio total: " + total())
    }

    const crearOrden = () => {
        const user = doc(db, "ordenes", "Primera")
        setDoc(user, {
            id: Math.random(),
            nombre: "Gonzalo",
            email: "example@gmail.com",
            tel: 168165181561
        })
        updateDoc(user, {
            "carrito": carrito
        })
        setOrden(false)
        productoComprado()
        eliminarProducto(producto.item.id)
    }
    
    
        return (
            <>
                <div className="cartBox">
                    <h2>Producto: {producto.item.title}</h2>
                    <span>Cantidad: {producto.cantidad}</span>
                    <span>Precio: ${producto.item.price} x {producto.cantidad}</span>
                    <span>Total: {total() > 0 && <p>${total()}</p>}</span>
                    <div className="cartBtn">
                        <button onClick={() => eliminarProducto(producto.item.id)}> Quitar </button>
                        <button onClick={crearOrden}>confirmar compra</button>
                        <button onClick={() => limpiarCarrito()}>Borrar todos los items</button>
                    </div>
                </div>
            </>
        )
}

export default CartItem