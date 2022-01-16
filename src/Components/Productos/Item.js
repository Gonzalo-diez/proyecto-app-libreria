import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faShare, faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import ItemCount from "../Items/ItemCount";

function Item({producto, agregadoCart}) {
    const {title, image, price, id} = producto

    return (
        <section className="products">
        
                            
                            <div className="box-container">
                                <div className="box">
                                    <div className="icons">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <FontAwesomeIcon icon={faShare} />
                                        <FontAwesomeIcon icon={faEye} />
                                    </div>
                                    <img src={image} alt={title} />
                                    <div className="content">
                                        <h3>{title}</h3>
                                        <div className="precio">{price} <span>$18500.00</span></div>
                                        <div className="stars">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <button className="btn">Agregar al carrito</button>
                                    </div>
                                    
                                    <Link to={`/item/${id}`}>Ver más del producto</Link>
                                    <ItemCount producto={title} onClick={agregadoCart} />
                                </div>
                                
                            </div>
        
        </section>
    )
}

export default Item