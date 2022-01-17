import React from "react";
import ItemDetail from "./ItemDetail"
import { Items } from "../Items/items.json"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({onAdd}) => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const test = onAdd

    useEffect(() => {
        setLoading(true)
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(Items) 
            },2000)
        }) 
        
        promesa.then((res)=>{
            setProducto(res.find(i => i.id == id))
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])


    return (
        <div>
            {loading ? <div className="carga"></div> : <ItemDetail  producto={producto} onAdd={test} />}
        </div>
    )
}

export default ItemDetailContainer