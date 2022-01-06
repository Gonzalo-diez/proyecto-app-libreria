import React from "react";
import {useState, useEffect} from "react"


function ItemDetail() {
    const myItemArray = [
        {id: 1, title: "Saga de libros Harry Potter", price: "$10000", author:"J.K Rowling", image:"./saga-harry-potter.png", detail: "Saga de libros de Harry Potter"},
        {id: 2, title: "Saga de libros Percy Jackson", price: "$10000", author:"Rick Riordan", image:"./saga-percy-jackson.png", detail: "Saga de libros de Percy Jackson"},
        {id: 3, title: "Saga de libros Narnia", price: "$10000", author:"C.S Lewis", image:"./saga-narnia.png", detail: "Saga de libros de Narnia"},
        {id: 4, title: "Saga de libros Maze Runner",price: "$10000", author:"James Dashner", image: "./saga-maze-runner.png", detail: "Saga de libros de Maze Runner"}
    ]
    const [myItem,setMyItem] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(myItemArray.find(elemento => elemento.title === ""))
            }, 2000)
        })
        promesa.then((detalle) => {
            setLoading(false)
            setMyItem(detalle)
        })
    })

    if(loading) {
        return (
            <p>cargando ...</p>
        )
    }
    else {
            return (
                <div className="descripciones">
                    <h2>{myItem.title}</h2>
                    <h3>{myItem.author}</h3>
                    <img src={myItem.image} alt={myItem.title} />
                    <p>Resumen: {myItem.detail}</p>
                </div>
            )
    }
}

export default ItemDetail;