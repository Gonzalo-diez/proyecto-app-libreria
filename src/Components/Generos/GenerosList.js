import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Items } from "../Items/items.json"

function GenerosList({elemento}) {
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