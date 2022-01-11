import React from "react";
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Items } from "../Items/items.json"
import ItemCount from "../Items/ItemCount";
import "../CSS/App.css"

function ItemDetail({onAdd}) {
    //Función para renderizar los detalles de los productos, usando useEffect y UseState
    //Utilizando {id} en useParams como parametro para el id de los items de items.json
    //Promesa para renderizar los detalles después de 2 segundos de ser seleccionados
    const [myItem,setMyItem] = useState([])
    const [loading,setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(Items)
            }, 2000)
        })
        promesa.then((myItem) => {
            setMyItem(myItem.find(i => i.id === id))
            setLoading(false)
        })
    }, [id])

    if(loading) {
        //Render de carga de los datos
        return (
            <p className="carga">cargando ...</p>
        )
    }
    else {
        //Estructura del los detalles
            return (
                <div className="descripciones">
                    <h2>Libro: {myItem.title}</h2>
                    <h3>Autor: {myItem.author}</h3>
                    <img src={myItem.image} alt={myItem.title} />
                    <p>Resumen: {myItem.detail}</p>
                    <h4>Precio: {myItem.price}</h4>
                    <div>
                        <ItemCount onAdd={onAdd} />
                    </div>
                </div>
            )
    }
}

export default ItemDetail;