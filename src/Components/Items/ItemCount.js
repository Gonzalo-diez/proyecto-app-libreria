import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ItemCount({stock = 20, initial = 0, onAdd}) {
    const [contador, setContador] = useState(initial)

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
        if(contador > 0){
            onAdd(contador)
        } 
        else {
            return(
                console.log("No se agrego ningún producto")
            )
        }
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