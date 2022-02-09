import React from "react";
import Item from "./Item"
import "./CSS/App.css"


const ItemList = ({productos}) => {
    //La función sirve para mapear los productos del ItemListContainer y que estos puedan renderizarse en Item (Conecta el ItemListContainer con el Item)
    return (
        <section id="listado-productos">
            {productos.map(producto=>{
                return <Item key={producto.id} producto={producto} />
            })}     
        </section>
    )
}

export default ItemList;