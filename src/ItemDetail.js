import React from "react";
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Items } from "./items.json"

function ItemDetail() {
    const [myItem,setMyItem] = useState([])
    const [loading,setLoading] = useState(true)
    const { id } = useParams()
    console.log({id})

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(Items.find(elemento => elemento.title))
            }, 2000)
        })
        promesa.then((detalle) => {
            setLoading(false)
            setMyItem(detalle)
        })
    })

    if(loading) {
        return (
            <p>cargando ...</p>
        )
    }
    else {
            return (
                <div className="descripciones">
                    <h2>{myItem.title}</h2>
                    <h3>{myItem.author}</h3>
                    <img src={myItem.image} alt={myItem.title} />
                    <p>Resumen: {myItem.detail}</p>
                </div>
            )
    }
}

export default ItemDetail;