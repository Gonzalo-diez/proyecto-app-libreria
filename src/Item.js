import React from "react";
import ItemCount from "./ItemCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faShare, faStar} from '@fortawesome/free-solid-svg-icons'
import "./main.css"
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Link } from "react-router-dom";

const items = [
    {id: 1, title: "Saga de libros Harry Potter", price: "$10000", author:"J.K Rowling", image:"./saga-harry-potter.png", detail: "Saga de libros de Harry Potter"},
    {id: 2, title: "Saga de libros Percy Jackson", price: "$10000", author:"Rick Riordan", image:"./saga-percy-jackson.png", detail: "Saga de libros de Percy Jackson"},
    {id: 3, title: "Saga de libros Narnia", price: "$10000", author:"C.S Lewis", image:"./saga-narnia.png", detail: "Saga de libros de Narnia"},
    {id: 4, title: "Saga de libros Maze Runner",price: "$10000", author:"James Dashner", image: "./saga-maze-runner.png", detail: "Saga de libros de Maze Runner"}
]



const Item = () => {
    return (
        items.map((elemento, indice) => {
            return (
            <BrowserRouter>
                <section className="products" key={indice}>

                    
                    <div className="box-container">
                        <div className="box">
                            <div className="icons">
                                <FontAwesomeIcon icon={faHeart} />
                                <FontAwesomeIcon icon={faShare} />
                                <FontAwesomeIcon icon={faEye} />
                            </div>
                            <img src={elemento.image} />
                            <div className="content">
                                <h3>{elemento.title}</h3>
                                <div className="precio">{elemento.price} <span>$18500.00</span></div>
                                <div className="stars">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <button className="btn">Agregar al carrito</button>
                            </div>
                            <button> <Link to={<ItemDetailContainer />}>Ver más del producto</Link> </button>
                            <ItemCount />
                        </div>
                        
                    </div>

                </section>
            </BrowserRouter>
            )
        })
    )
}

export default Item