import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faShare, faStar} from '@fortawesome/free-solid-svg-icons'
import ItemCount from "./ItemCount";


function Item() {


return (
        <section className="products">

    <h1 className="heading">Ultimos <span>productos</span></h1>
    <div className="box-container">
        <div className="box">
            <div className="icons">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShare} />
                <FontAwesomeIcon icon={faEye} />
            </div>
            <img src="./saga-harry-potter.png" />
            <div className="content">
                <h3>Saga de libros Harry Potter</h3>
                <div className="precio">$14500 <span>$18500.00</span></div>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <button className="btn">Agregar al carrito</button>
            </div>
            <ItemCount />
        </div>
        
        <div className="box">
            <div className="icons">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShare} />
                <FontAwesomeIcon icon={faEye} />
            </div>
            <img src="./saga-percy-jackson.png" />
            <div className="content">
                <h3>Saga de percy Jackson</h3>
                <div className="precio">$13000.00 <span>$15500.00</span></div>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <button className="btn">Agregar al carrito</button>
                <ItemCount />
            </div>
        </div>

        <div className="box">
            <div className="icons">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShare} />
                <FontAwesomeIcon icon={faEye} />
            </div>
            <img src="./saga-narnia.png" />
            <div className="content">
                <h3>Saga de Narnia</h3>
                <div className="precio">$16000.00 <span>$20500.00</span></div>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <button className="btn">Agregar al carrito</button>
                <ItemCount />
            </div>
        </div>

        <div className="box">
            <div className="icons">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faShare} />
                <FontAwesomeIcon icon={faEye} />
            </div>
            <img src="./saga-maze-runner.png" />
            <div class="content">
                <h3>Saga de Maze Runner</h3>
                <div className="precio">$15800.00 <span>$21000.00</span></div>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <button className="btn">Agregar al carrito</button>
                <ItemCount />
            </div>
        </div>

    </div>

    </section>
)
}

export default Item;
