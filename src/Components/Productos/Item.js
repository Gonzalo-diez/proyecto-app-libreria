import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faShare, faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import ItemCount from "../Items/ItemCount";
import { CartContext } from "../Carrito/CartContext";


function Item({producto}) {
    const {title, image, price, id} = producto
    const { agregarProducto } = useContext(CartContext)
    const test = (contador) => {
        agregarProducto(producto, contador)
    }

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
                                    </div>
                                    
                                    <Link to={`/item/${id}`}>Ver más del producto</Link>
                                    <ItemCount producto={title} onAdd={test} />
                                </div>
                                
                            </div>
        
        </section>
    )
}

export default Item