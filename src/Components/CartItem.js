import React from "react";

const CartItem = ({ producto, eliminarProducto, total }) => {
    return (
        <>
            <div className="cartBox">
                <h2>Producto: {producto.item.title}</h2>
                <span>Cantidad: {producto.cantidad}</span>
                <span>Precio: ${producto.item.price} x {producto.cantidad}</span>
                <span>Total: {total() > 0 &&  <p>${total()}</p>}</span>
                <div className="cartBtn">
                    <button onClick={() => eliminarProducto(producto.item.id)}> Quitar </button>
                </div>
            </div>
        </>
        )
}

export default CartItem