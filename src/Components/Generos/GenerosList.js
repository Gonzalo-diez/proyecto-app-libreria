import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Items } from "../Items/items.json"

function GenerosList() {
    const [genero, setGenero] = useState([])
    const [loading, setLoading] = useState(true)
    const { genre } = useParams()

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(Items)
            }, 2000)
        })
        promesa.then((x) => {
            setGenero(x.find(i => i.genre == genre))
            setLoading(false)
        })
    }, [genre])

    if(loading) {
        //Render de carga de los datos
        return (
            <p className="carga">cargando ...</p>
        )
    }
    else {
        return(
            <div className="listBox">
                <img src={genero.image} alt={genero.title} />
                <h1>{genero.name}</h1>
                <h2>{genero.author}</h2>
            </div>
        )
    }
}

export default GenerosList