import React from "react";
import ItemList from "./ItemList"
import { Items } from "../Items/items.json"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(Items)
            }, 2000)
        })
        promesa.then((productos) => {
            setLoading(false)
            setProductos(productos)
        })

    },[id])

    if(loading) {
        return (
            <div className="carga"></div>
        )
    }
    else {
        return (
            <ItemList productos={productos} />
        )
    }
   
}

export default ItemListContainer