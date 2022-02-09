import { useContext, useState } from "react"
import { CartContext } from "./Context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { db } from "./Firebase"
import { addDoc, collection, Timestamp } from "firebase/firestore";
import CartItem from "./CartItem"

const Cart = () => {

    //Función para guardar las ordenes que un usuario ingrese a firestore
    //El uso de hooks useContext para usar el contexto de CartContext, useNavvigate para navegar al CheckOut al pedir la orden y el useState para setear valores del pedido.
    const navigate = useNavigate()
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
    }

    //Condicional if para cuando carrito este vacio devuelva que el carrito esta vacio y que sugiera volver al inicio 
    if(carrito.length === 0) {
        return(
            <div className="cart-vacio">
                <h2>No se han agregado productos aún</h2>
                <Link to={"/"}>Ir al inicio</Link>
            </div>
        )
    }
    //Y else para cuando tenga productos devuelva los mismos
    //Los botones para borrar todos los items del carrito y para cuando se haga click en Realizar pedido, nos rediriga al CheckOut
    else {
        return (
            <>
                {carrito.map((producto) => <CartItem key={producto.item.id} producto={producto} eliminarProducto={eliminarProducto} limpiarCarrito={limpiarCarrito} total={total} carrito={carrito} /> )}
                <div className="cartBtn">
                    <button onClick={() => limpiarCarrito()}>Borrar todos los items</button>
                    {!orden ? <button onClick={() => crearOrden()}>Realizar Pedido</button> : navigate("/Checkout")}
                </div>
            </>
        )
    }
}

export default Cart