import React, { useState, useEffect } from "react";
import ItemList from "./ItemList"
import { db } from "../Nucleo/Firebase"
import { collection , getDocs , query , where } from "firebase/firestore"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    
    useEffect(() => {
        if(id){
            const coleccionItems = collection(db,"Items")
            const filtro1 = where("title","==",id)
            const filtro2 = where("price",">",0)
            const consulta = query(coleccionItems,filtro1,filtro2)
            const pedido = getDocs(consulta)
            pedido
                .then((resultado)=>{
                    setProductos(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false) 
                })
                .catch((error)=>{
                    console.log(error)
                })
        }else {
            const coleccionItems = collection(db,"Items")
            const pedido = getDocs(coleccionItems)
            pedido
                .then((resultado)=>{
                    setProductos(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false) 
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
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