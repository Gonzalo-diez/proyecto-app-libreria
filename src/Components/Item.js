import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faStar} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function Item({producto}) {
    //Los valores dentro {} van a ser iguales a producto, de esta manera se ahorra en decir por ejemplo "producto.title" y pasa a ser "title"
    const {title, image, price, id} = producto
    const gusta = () => {
        console.log("Le ha dado me gusta a " + producto.title)
    }
    const deseado = () => {
        console.log(producto.title + " se ha agregado a la lista de productos deseados")
    }
    //Estructura del Item(Página inicial)
    return (
        <section className="products">
        
                            
                            <div className="box-container">
                                <div className="box">
                                    <div className="icons">
                                        <FontAwesomeIcon icon={faHeart} onClick={gusta} />
                                        <FontAwesomeIcon icon={faEye} onClick={deseado} />
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
                                    {/* Link que lleva al usuario a los detalles del producto que este quiera */}
                                    <Link to={`/item/${id}`} className="btnDetail">Ver más del producto</Link>
                                </div>
                                
                            </div>
        
        </section>
    )
}

export default Item