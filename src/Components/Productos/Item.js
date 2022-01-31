import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faShare, faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { db } from "../Nucleo/Firebase"
import { collection, addDoc } from "firebase/firestore";

function Item({producto}) {
    const {title, image, price, id} = producto
    const [like, setLike] = useState()
    const crearLista = () => {
        const docRef = addDoc(collection(db, "listaDeseados"), {
            producto: producto
        })
        const pedido = docRef
        pedido
        .then((res) => {
            setLike(res.id)
            alert("Agregado a la lista de deseados " + producto.title)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <section className="products">
        
                            
                            <div className="box-container">
                                <div className="box">
                                    <div className="icons">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faShare} />
                                        <FontAwesomeIcon icon={faEye} onClick={crearLista} />
                                    </div>
                                    <img src={image} alt={title} />
                                    <div className="content">
                                        <h3>{title}</h3>
                                        <div className="precio">${price} <span>$18500.00</span></div>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>
                                    
                                    <Link to={`/item/${id}`} className="btnDetail">Ver más del producto</Link>
                                </div>
                                
                            </div>
        
        </section>
    )
}

export default Item