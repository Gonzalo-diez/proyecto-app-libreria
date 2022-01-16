import React from "react";
import {useState} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Carrito/CartContext";
import { useContext } from "react";
import ItemCount from "../Items/ItemCount";
import "../CSS/App.css"


function ItemDetail({ producto }) {
    //Función para renderizar los detalles de los productos, usando useEffect y UseState
    //Utilizando {id} en useParams como parametro para el id de los items de items.json
    //Promesa para renderizar los detalles después de 2 segundos de ser seleccionados
    const { title, price, detail, image, author } = producto
    const [mostrar, setMostrar] = useState(true)
    const { agregarProducto } = useContext(CartContext)
    const onAdd = (cantidad) => {
        setMostrar(false)
        agregarProducto(producto, cantidad)
    }
        //Estructura del los detalles
        if(mostrar) {
            return (
                <div className="descripciones">
                    <h2>Libro: {title}</h2>
                    <h3>Autor/a: {author}</h3>
                    <img src={image} alt={title} />
                    <p>Resumen: {detail}</p>
                    <h4>Precio: {price}</h4>
                    <div>
                        <ItemCount producto={title} onAdd={onAdd} />
                        <Link to={"/Cart"}>Terminar compra</Link>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="descripciones">
                    <h2>Libro: {title}</h2>
                    <h3>Autor/a: {author}</h3>
                    <img src={image} alt={title} />
                    <p>Resumen: {detail}</p>
                    <div>
                        <Link to={"/Cart"}>Terminar compra</Link>
                    </div>
                </div>
            )
        }
}

export default ItemDetail;