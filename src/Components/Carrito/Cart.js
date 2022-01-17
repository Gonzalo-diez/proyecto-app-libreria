import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"

const Cart = () => {

    const { carrito, deleteItem } = useContext(CartContext)

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
            carrito.map(prod => <CartItem key={prod.item.id} producto={prod} deleteItem={deleteItem} />)
        )
    }
}

export default Cart