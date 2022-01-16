import React from "react";
import Item from "./Item"
import "../CSS/App.css"


const ItemList = ({productos}) => {

    const agregadoCart = (contador) => {
        console.log(contador + " de " + productos + " se agregaron al carrito")
    }

    return (
        <section id="listado-productos">
            {productos.map(producto=>{
                return <Item key={producto.id} producto={producto} agregadoCart={agregadoCart} />
            })}     
        </section>
    )
}

export default ItemList;