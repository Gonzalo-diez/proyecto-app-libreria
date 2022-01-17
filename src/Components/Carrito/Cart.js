import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"

const Cart = () => {

    const { carrito, eliminarProducto } = useContext(CartContext)

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
            carrito.map((producto) => <CartItem key={producto.item.id} producto={producto} eliminarProducto={eliminarProducto} />)
        )
    }
}

export default Cart