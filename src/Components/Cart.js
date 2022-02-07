import { useContext, useState } from "react"
import { CartContext } from "./Context/CartContext"
import { Link } from "react-router-dom"
import { db } from "./Firebase"
import { addDoc, collection, Timestamp } from "firebase/firestore";
import CartItem from "./CartItem"
import CheckOut from "./CheckOut";

const Cart = () => {

    const [orden, setOrden] = useState()
    const { carrito, eliminarProducto, limpiarCarrito, total } = useContext(CartContext)
    const crearOrden = () => {
        const docRef = addDoc(collection(db, "ordenes"), {
            id: Math.random(),
            name: "Gonzalo",
            email: "example@gmail.com",
            tel: 49819814,
            carrito: carrito,
            date: Timestamp.fromDate(new Date())
        })
        const pedido = docRef
        pedido
        .then((res) => {
            setOrden(res.id)
            alert("Orden creada: " + res.id)
        })
        .catch((error) => {
            console.error(error)
        })
        limpiarCarrito()
    }

    if(carrito.length === 0) {
        return(
            <div>
                <h2>No se han agregado productos aún</h2>
                <Link to={"/"}>Ir al inicio</Link>
            </div>
        )
    }
    else {
        return (
            <>
                {carrito.map((producto) => <CartItem key={producto.item.id} producto={producto} eliminarProducto={eliminarProducto} limpiarCarrito={limpiarCarrito} total={total} carrito={carrito} /> )}
                <div className="cartBtn">
                    <button onClick={() => limpiarCarrito()}>Borrar todos los items</button>
                </div>
                <div className="btn-compra">
                    <CheckOut crearOrden={crearOrden} />
                </div>
            </>
        )
    }
}

export default Cart