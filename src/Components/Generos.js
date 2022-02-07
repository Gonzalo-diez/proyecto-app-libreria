import React from "react";
import { useEffect, useState } from "react"
import { db } from "./Firebase"
import { collection , getDocs , query , where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./CSS/App.css"


//Array de items sobre los generos de libros

function Generos() {
    const [genero, setGenero] = useState([])
    const [loading, setLoading] = useState(true)
    const { generos } = useParams()
    
    useEffect(() => {
        if(generos){
            const coleccionItems = collection(db,"listaGeneros")
            const filtro1 = where("title","==",genero)
            const consulta = query(coleccionItems,filtro1)
            const pedido = getDocs(consulta)
            pedido
                .then((resultado)=>{
                    setGenero(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false) 
                })
                .catch((error)=>{
                    console.log(error)
                })
        }else {
            const coleccionItems = collection(db,"listaGeneros")
            const pedido = getDocs(coleccionItems)
            pedido
                .then((resultado)=>{
                    setGenero(resultado.docs.map(doc=>({id : doc.id,...doc.data()})))
                    setLoading(false) 
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }, [generos])

    if(loading) {
        return (
            <p className="carga"></p>
        )
    }
    else {
        //Retorno de la app sobre los generos de libros, con metodo .map() para que muestre todos los generos
        return(
            genero.map((elemento, indice) => {
                return (
                    <div className="box-container" key={indice}>
                        <div className="box">
                            <img src={elemento.image} alt={elemento.title} />
                        </div>
                        <div className="content">
                            <Link to={`/Category/${elemento.genero}`} className="btnDetail">{elemento.title}</Link>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Generos