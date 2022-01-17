import React from "react";

const CartItem = ({ producto, deleteItem }) => {
    return (
        <div>
            <h2>Producto: {producto.title}</h2>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio: {producto.price}</p>
            <button onClick={deleteItem}>Borrar</button>
        </div>
    )
}

export default CartItem