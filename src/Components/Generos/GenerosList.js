import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Policiaco, Romance, Ficcion, Fantasia } from "./genero.json"

function GenerosList() {
    const [genero, setGenero] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const lista = { Policiaco, Romance, Ficcion, Fantasia }

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(lista)
            }, 2000)
        })
        promesa.then((productos) => {
            setGenero(productos.find(i => i.id === id))
            setLoading(false)
        })
    }, [id])

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