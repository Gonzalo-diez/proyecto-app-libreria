import React from "react";
import { db } from "../Nucleo/Firebase"
import { doc, setDoc } from "firebase/firestore";

const CartItem = ({ producto, eliminarProducto, limpiarCarrito, total, carrito }) => {

    const crearOrden = () => {

        const usuarios = {
            name: "Gonzalo",
            email: "example@gmail.com",
            tel: 4191198
        }

        const prueba = setDoc(doc(db, "ordenes", "Primera"), usuarios)

        const orden = {
            comprador: usuarios,
            items: carrito,
            total: total
        }
    
        console.log(orden)
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