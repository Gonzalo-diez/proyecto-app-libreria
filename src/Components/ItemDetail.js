import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import "./CSS/App.css"


function ItemDetail({ producto }) {
    //Función para renderizar los detalles de los productos, usando useEffect y UseState
    //Utilizando {id} en useParams como parametro para el id de la colección "Items" del firebase
    const { title, price, detail, image, author } = producto
    const [mostrar, setMostrar] = useState(true)
    const { agregarProducto } = useContext(CartContext)
    const test = (contador) => {
        setMostrar(false)
        agregarProducto(producto, contador)
    }
        //Estructura del los detalles
        //Con condicional if para que el usuario pueda utilizar el contador de productos ("ItemCount") y cuando el mismo haga click en el icono de carrito, se genere el condicional else
        if(mostrar) {
            return (
                <div className="descripciones">
                    <h2>Libro: {title}</h2>
                    <h3>Autor/a: {author}</h3>
                    <img src={image} alt={title} />
                    <br />
                    <span>Resumen: {detail}</span>
                    <h4>Precio: ${price}</h4>
                    <div>
                        <ItemCount producto={title} onAdd={test} />
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
                    <br />
                    <span>Resumen: {detail}</span>
                    <div>
                        <Link to={"/Cart"}>Terminar compra</Link>
                    </div>
                </div>
            )
        }
}

export default ItemDetail;