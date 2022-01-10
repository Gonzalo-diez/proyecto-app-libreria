import React from "react";
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Items } from "../Items/items.json"
import "../CSS/App.css"

function ItemDetail() {
    //Función para renderizar los detalles de los productos, usando useEffect y UseState
    //Utilizando {id} en useParams como parametro para el id de los items de items.json
    //Promesa para renderizar los detalles después de 2 segundos de ser seleccionados
    const [myItem,setMyItem] = useState([])
    const [loading,setLoading] = useState(true)
    const detalle = Items
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(detalle.find(elemento => elemento.id = detalle))
            }, 2000)
        })
        promesa.then((detalle) => {
            setMyItem(detalle)
            setLoading(false)
            const data = Items.filter(Item => Item.id)
            console.log(data)
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
                <div className="descripciones" key={detalle.id} {...detalle}>
                    <h2>{myItem.title}</h2>
                    <h3>{myItem.author}</h3>
                    <img src={myItem.image} alt={myItem.title} />
                    <p>Resumen: {myItem.detail}</p>
                </div>
            )
    }
}

export default ItemDetail;