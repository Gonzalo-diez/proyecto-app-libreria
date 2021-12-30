import React from "react";


function ItemDetail() {
    return (
      const items = [
     {id: 1, title: "Saga de libros Harry Potter", price: "$10000", author:"J.K Rowling", image:"./saga-harry-potter.png", detail: "Saga de libros de Harry Potter"},
    {id: 2, title: "Saga de libros Percy Jackson", price: "$10000", author:"Rick Riordan", image:"./saga-percy-jackson.png", detail: "Saga de libros de Percy Jackson"},
    {id: 3, title: "Saga de libros Narnia", price: "$10000", author:"C.S Lewis", image:"./saga-narnia.png", detail: "Saga de libros de Narnia"},
    {id: 4, title: "Saga de libros Maze Runner",price: "$10000", author:"James Dashner", image: "./saga-maze-runner.png", detail: "Saga de libros de Maze Runner"}
        ]
                <>
                    <div className="descripciones">
                        <h2>{items.title}</h2>
                        <h3>{items.author}</h3>
                        <img src={items.image} />
                        <p>Resumen: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores corrupti quos nobis.</p>
                    </div>
                </>
            )
}

export default ItemDetail;