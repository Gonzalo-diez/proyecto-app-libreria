import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { carrito, deleteItem } = useContext(CartContext)

     
 ​  ​return​ ​( 
 ​    ​<​div​> 
 ​      ​{​carrito​.​length​ ​===​ ​0​ ​&& 
 ​        ​<​div​> 
 ​          ​<​p​>​No hay productos aún​<​/​p​> 
 ​          ​<​Link​ ​to​=​'/'​>​Ir al inicio​<​/​Link​> 
 ​        ​<​/​div​> 
 ​      ​} 
 ​      ​{​(​carrito​.​length​ ​>​ ​0​)​ ​&&​ ​carrito​.​map​(​prod​ ​=>​ ​<​CartItem​ ​key​=​{​prod​.​item​.​id​}​ ​product​=​{​prod​}​ ​deleteItem​=​{​deleteItem​}​ ​/​>​)​} 
 ​    ​<​/​div​> 
 ​  ​)
}

export default Cart