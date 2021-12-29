import React from "react";
import { useEffect,useState } from "react";
import ItemCount from "./ItemCount";


function CartCount() {
    const carts = [
    {id: 1, title: "Saga de libros Harry Potter", price: "$10000", author:"J.K Rowling", image:"./saga-harry-potter.png", detail: "Saga de libros de Harry Potter"},
    {id: 2, title: "Saga de libros Percy Jackson", price: "$10000", author:"Rick Riordan", image:"./saga-percy-jackson.png", detail: "Saga de libros de Percy Jackson"},
    {id: 3, title: "Saga de libros Narnia", price: "$10000", author:"C.S Lewis", image:"./saga-narnia.png", detail: "Saga de libros de Narnia"},
    {id: 4, title: "Saga de libros Maze Runner",price: "$10000", author:"James Dashner", image: "./saga-maze-runner.png", detail: "Saga de libros de Maze Runner"}
    ]

    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            res(carts)   
        })
        promesa.then((cart) => {
            setLoading(false)
            setCart(cart)
        })
    }, [])

    if(loading) {
        return (
            <p>cargando ...</p>
        )
    }

    return (
        cart.map((elemento, indice) => {
            return (
                <div className="cartBox" key={indice}>
                    <div className="cartContent">
                        <h3 className="cartTitle">{elemento.title}</h3>
                        <img className="cartImage" src={elemento.image} />
                    </div>
                </div>
            )
        })
    )
}

export default CartCount