import React from "react";
import { useEffect,useState } from "react";
import ItemCount from "./ItemCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faShare, faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import "./main.css"
import { Items } from "./items.json"

function ItemList() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(Items)
            }, 2000)
        })
        promesa.then((productos) => {
            setLoading(false)
            setProductos(productos)
        })
    }, [])

    if(loading) {
        return (
            <p>cargando ...</p>
        )
    }
    else{
        return (
            productos.map((elemento, indice) => {
                return (
                        <section className="products" key={indice}>
        
                            
                            <div className="box-container">
                                <div className="box">
                                    <div className="icons">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faShare} />
                                        <FontAwesomeIcon icon={faEye} />
                                    </div>
                                    <img src={elemento.image} alt={elemento.title} />
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
                                    <button> <Link to="/item/:id">Ver más del producto</Link> </button>
                                    <ItemCount />
                                </div>
                                
                            </div>
        
                        </section>
                    )
            })
        )}
}

export default ItemList;