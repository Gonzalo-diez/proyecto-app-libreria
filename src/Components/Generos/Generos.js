import React from "react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../CSS/App.css"


//Array de items sobre los generos de libros
const items = [
    {id: 1, title: "Policiaco", image: "./genero-policiaco.jpg", genero: "Policiaco"},
    {id: 2, title: "Romance", image: "./genero-romance.jpg", genero: "Romance"},
    {id: 3, title: "Ciencia Ficción", image: "./genero-ficcion.jpg", genero: "Ciencia Ficción"},
    {id: 4, title: "Fantasia", image: "./genero-fantasia.jpg", genero: "Fantasia"}
]

function Generos() {
    const [genero, setGenero] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        //promesa para cargar los items en respuesta, pero que debe de esperar 2 segundos
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