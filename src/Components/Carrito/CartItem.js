import React from "react";

const CartItem = ({ producto, eliminarProducto, limpiarCarrito }) => {
    return (
        <>
            <div>
                <h2>Producto: {producto.item.title}</h2>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio: {producto.item.price}</p>
                <button onClick={() => eliminarProducto(producto.item.id)}> Quitar </button>
            </div>
            <div>
                <button onClick={() => limpiarCarrito()}>Borrar todos los items</button>
            </div>
        </>
    )
}

export default CartItem