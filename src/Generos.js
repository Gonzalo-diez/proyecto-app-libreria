import React from "react";
import { useEffect, useState } from "react"
import "./genero.css"

const items = [
    {id: 1, title: "Policiaco", image: "./genero-policiaco.jpg"},
    {id: 2, title: "Romance", image: "./genero-romance.jpg"},
    {id: 3, title: "Ciencia Ficción", image: "./genero-ficcion.jpg"},
    {id: 4, title: "Fantasia", image: "./genero-fantasia.jpg"}
]

function Generos() {
    const [genero, setGenero] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(items)
            }, 2000)
        })
        promesa.then((genero) => {
            setLoading(false)
            setGenero(genero)
        })
    }, [])

    if(loading) {
        return (
            <p>cargando ...</p>
        )
    }
    else {
        return(
            genero.map((elemento, indice) => {
                return (
                    <div className="box-container" key={indice}>
                        <div className="box">
                            <img src={elemento.image} alt={elemento.title} />
                        </div>
                        <div className="content">
                            <button><h2>{elemento.title}</h2></button>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Generos