import { useContext } from "react"
import { CartContext } from "./CartContext"

const Cart = () => {

    const { cantidad_total,  } = useContext(CartContext)

    return (
        <div>
            <h2>Carrito</h2>
            <p>Cantidad Total : {cantidad_total}</p>
            <p>Producto: </p>
            <button>Quitar</button>
        </div>
    )
}

export default Cart