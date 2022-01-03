import React from "react";
import {useState} from "react"


function ItemDetail() {
    const myItem = [
        {id: 1, title: "Saga de libros Harry Potter", price: "$10000", author:"J.K Rowling", image:"./saga-harry-potter.png", detail: "Saga de libros de Harry Potter"},
        {id: 2, title: "Saga de libros Percy Jackson", price: "$10000", author:"Rick Riordan", image:"./saga-percy-jackson.png", detail: "Saga de libros de Percy Jackson"},
        {id: 3, title: "Saga de libros Narnia", price: "$10000", author:"C.S Lewis", image:"./saga-narnia.png", detail: "Saga de libros de Narnia"},
        {id: 4, title: "Saga de libros Maze Runner",price: "$10000", author:"James Dashner", image: "./saga-maze-runner.png", detail: "Saga de libros de Maze Runner"}
    ]
    const [myItem,setMyItem] = useState()
        
    return (
        <div className="descripciones">
            <h2>{setMyItem(myItem[0].title)}</h2>
            <h3>{setMyItem(myItem[0].author)}</h3>
            <img src={setMyItem(myItem[0].image)} />
            <p>Resumen: {setMyItem(myItem[0].detail)}</p>
        </div>
    )
}

export default ItemDetail;