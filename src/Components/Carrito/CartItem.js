import React from "react";

const CartItem = ({ producto, eliminarProducto, limpiarCarrito, total }) => {

    return (
        <>
            <div className="cartBox">
                <h2>Producto: {producto.item.title}</h2>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio: ${producto.item.price} x {producto.cantidad}</p>
                <p>Total: {total() > 0 && <p>${total()}</p>}</p>
                <div className="cartBtn">
                    <button onClick={() => eliminarProducto(producto.item.id)}> Quitar </button>
                    <button>Comprar</button>
                    <button onClick={() => limpiarCarrito()}>Borrar todos los items</button>
                </div>
            </div>
        </>
    )
}

export default CartItem