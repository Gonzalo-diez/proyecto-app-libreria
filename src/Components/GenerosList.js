import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./Firebase"
import { collection , getDocs , query , where } from "firebase/firestore"
import { Link } from "react-router-dom"

function GenerosList() {
    //Uso del useState y useEffect para la promesa
    const [myGenero, setGenero] = useState([])
    const [loading, setLoading] = useState(true)
    const { genero } = useParams()

    useEffect(() => {
        if(genero){
            const coleccionItems = collection(db,"Items")
            const filtro1 = where("genero","==",genero)
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
            const coleccionItems = collection(db,"Items")
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
    }, [genero])

    if(loading) {
        //Render de carga de los datos
        return (
            <p className="carga"></p>
        )
    }
    else {
        //Retorno de la función con los libros fitrados por genero
        return(
            myGenero.map((elemento, indice) => {
                return(
                    <div className="listBox" key={indice}>
                        <div className="boxGenre">
                            <img src={elemento.image} alt={elemento.title} />
                            <h1>{elemento.title}</h1>
                            <h2>{elemento.author}</h2>
                            <Link to={`/item/${elemento.id}`} className="btnDetail">Ver más del producto</Link>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default GenerosList