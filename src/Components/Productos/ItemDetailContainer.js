import React from "react";
import ItemDetail from "./ItemDetail"
import { db } from "../Nucleo/Firebase"
import { collection, getDoc , doc } from "firebase/firestore"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({onAdd}) => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const test = onAdd

    useEffect(() => {
        const coleccionItems = collection(db,"Items")
        const docRef = doc(coleccionItems,id)
        const pedido = getDoc(docRef)

        pedido
        .then((resultado)=>{
            const producto = resultado.data()
            setProducto(producto)
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