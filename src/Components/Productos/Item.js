import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { FavouriteContext } from "../User/FavouriteContext"

function Item({producto}) {
    const {title, image, price, id} = producto
    const { agregarLista } = useContext(FavouriteContext)
    const test = () => {
        agregarLista(producto)
    }

    const gusta = () => {
        console.log("Le ha dado me gusta a " + producto.title)
    }

    return (
        <section className="products">
        
                            
                            <div className="box-container">
                                <div className="box">
                                    <div className="icons">
                                        <FontAwesomeIcon icon={faHeart} onClick={gusta} />
                                        <FontAwesomeIcon icon={faEye} onClick={test} />
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