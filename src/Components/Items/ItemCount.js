import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ItemCount({stock = 20, initial = 0, onAdd, producto}) {
    const [contador, setContador] = useState(initial)
    const [agregar, setAgregar] = useState()

    const aumentarContador = () => {
        setContador(contador + 1);
    }

    const disminuirContador = () => {
        setContador(contador - 1);
    }

    const limiteContador = () => {
        if(contador === stock) {
            setContador(contador - 1)
            alert("Ya se acabo el stock")
        }
        else if (contador === 0) {
            setContador(contador + 1)
        }
    }

    const agregarCarrito = () => {
        setAgregar(agregar)
        console.log("se ha agregado " + contador + " productos de la " + producto + " al carrito")
    } 

        return(
            <div className="card">
                <div className="shopCount">
                    <h1>Contador</h1>
                    <h2>{contador}</h2>
                </div>
                <div className="botones" onClick={limiteContador}>
                    <button onClick={aumentarContador}><FontAwesomeIcon icon={faPlus} /></button>
                    <button onClick={disminuirContador}><FontAwesomeIcon icon={faMinus} /></button>
                </div>
                <div className="cartIcon">
                <button onClick={agregarCarrito}><FontAwesomeIcon icon={faShoppingCart}/></button>
                </div>
            </div>
        )
    }

export default ItemCount