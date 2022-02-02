import React from "react"


function User({ producto, eliminarProducto }) {
    return (
        <div className="user-box">
            <div className="user-text">
                <h2>Bienvenido usuario</h2>
                <span>Lista de productos deseados: </span>
                <h2>Producto: {producto}</h2>
                <img src={producto} alt={producto} />
                <button onClick={eliminarProducto}>Eliminar producto de la lista</button>
            </div>
        </div>
    )
}

export default User