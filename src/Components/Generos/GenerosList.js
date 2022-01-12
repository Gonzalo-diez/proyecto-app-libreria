import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Items } from "../Items/items.json"

function GenerosList({elemento}) {
    //Uso del useState y useEffect para la promesa
    const [myGenero, setGenero] = useState([])
    const [loading, setLoading] = useState(true)
    const { genero } = useParams()

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(Items)
            }, 2000)
        })
        promesa.then((x) => {
            //Filtro del según el genero del libro
            setGenero(x.filter(i => i.genero == genero))
            setLoading(false)
        })
    }, [genero])

    if(loading) {
        //Render de carga de los datos
        return (
            <p className="carga">cargando ...</p>
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
                        </div>
                    </div>
                )
            })
        )
    }
}

export default GenerosList