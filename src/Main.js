import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faShare, faStar} from '@fortawesome/free-solid-svg-icons'
import "./main.css"

function Main() {
    return (
        <section class="products" id="productos">

        <h1 class="heading">Ultimos <span>productos</span></h1>
        <div class="box-container">
            <div class="box">
                <div class="icons">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShare} />
                    <FontAwesomeIcon icon={faEye} />
                </div>
                <img src="./saga-harry-potter.png" />
                <div class="content">
                    <h3>Saga de Harry Potter</h3>
                    <div class="precio">$15000.00 <span>$18500.00</span></div>
                    <div class="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <button class="btn">Agregar al carrito</button>
                </div>
            </div>
            
            <div class="box">
                <div class="icons">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShare} />
                    <FontAwesomeIcon icon={faEye} />
                </div>
                <img src="./saga-percy-jackson.png" />
                <div class="content">
                    <h3>Libro</h3>
                    <div class="precio">$13000.00 <span>$15500.00</span></div>
                    <div class="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <button class="btn">Agregar al carrito</button>
                </div>
            </div>

            <div class="box">
                <div class="icons">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShare} />
                    <FontAwesomeIcon icon={faEye} />
                </div>
                <img src="./saga-narnia.png" />
                <div class="content">
                    <h3>Libro</h3>
                    <div class="precio">$16000.00 <span>$20500.00</span></div>
                    <div class="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <button class="btn">Agregar al carrito</button>
                </div>
            </div>

            <div class="box">
                <div class="icons">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShare} />
                    <FontAwesomeIcon icon={faEye} />
                </div>
                <img src="./saga-maze-runner.png" />
                <div class="content">
                    <h3>Libro</h3>
                    <div class="precio">$15800.00 <span>$21000.00</span></div>
                    <div class="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <button class="btn">Agregar al carrito</button>
            </div>
            </div>

        </div>

    </section>
    )
}

export default Main